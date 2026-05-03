#!/usr/bin/env node
/**
 * generate-gallery-manifest.js
 *
 * Pulls all gallery images from Cloudinary once and writes
 * assets/gallery-manifest.json — committed to the repo and served
 * statically by Vercel. Zero Cloudinary API calls at runtime.
 *
 * Run whenever you add or remove gallery photos:
 *   cd backend && node ../scripts/generate-gallery-manifest.js
 *
 * Requires .env in backend/ with:
 *   CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
 *   CLOUDINARY_ROOT_FOLDER (optional)
 */

'use strict';

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../backend/.env') });

const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY    = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;
const ROOT_FOLDER = (process.env.CLOUDINARY_ROOT_FOLDER || '').replace(/\/+$/, '');

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
  console.error('✗ Missing CLOUDINARY_CLOUD_NAME / API_KEY / API_SECRET in backend/.env');
  process.exit(1);
}

cloudinary.config({ cloud_name: CLOUD_NAME, api_key: API_KEY, api_secret: API_SECRET, secure: true });

const NON_IMAGE = new Set(['pdf','doc','docx','xls','xlsx','ppt','pptx','zip','rar']);
const BLACKLIST  = new Set(['blog','sponzori']);

function normFolder(p) {
  return (p || '').split('/').map(s => s.trim()).filter(Boolean).join('/');
}

function getFolderPath(resource) {
  const af = normFolder(resource.asset_folder || resource.folder || '');
  if (af) return af;
  const parts = (resource.public_id || '').split('/').filter(Boolean);
  if (parts.length <= 1) return '';
  parts.pop();
  return normFolder(parts.join('/'));
}

function isAllowed(folderPath) {
  return folderPath.split('/').every(seg => !BLACKLIST.has(seg.toLowerCase()));
}

function isInRoot(folderPath) {
  if (!ROOT_FOLDER) return true;
  return folderPath === ROOT_FOLDER || folderPath.startsWith(ROOT_FOLDER + '/');
}

async function fetchAll() {
  const resources = [];
  let cursor = null;
  do {
    let q = cloudinary.search.expression('resource_type:image').max_results(500);
    if (cursor) q = q.next_cursor(cursor);
    const result = await q.execute();
    resources.push(...(result.resources || []));
    cursor = result.next_cursor || null;
    process.stdout.write(`  fetched ${resources.length} resources…\r`);
  } while (cursor);
  console.log(`\n  total: ${resources.length} resources`);
  return resources;
}

async function main() {
  console.log(`Cloudinary: ${CLOUD_NAME}  root: "${ROOT_FOLDER || '(none)'}"`);
  console.log('Fetching all images…');

  const resources = await fetchAll();
  const grouped = new Map();

  for (const r of resources) {
    if (NON_IMAGE.has((r.format || '').toLowerCase())) continue;
    const folder = getFolderPath(r);
    if (!folder || !isInRoot(folder) || !isAllowed(folder)) continue;

    if (!grouped.has(folder)) {
      const segments = folder.split('/').filter(Boolean);
      grouped.set(folder, {
        folder: segments[segments.length - 1] || folder,
        path: folder,
        images: []
      });
    }
    grouped.get(folder).images.push({
      url:       r.secure_url,
      thumbUrl:  r.secure_url,
      publicId:  r.public_id,
      format:    r.format || '',
      createdAt: r.created_at || ''
    });
  }

  // Sort images within each folder by createdAt then publicId
  const folders = Array.from(grouped.values())
    .map(b => ({
      ...b,
      images: b.images.slice().sort((a, b) => {
        const ta = Date.parse(a.createdAt) || 0;
        const tb = Date.parse(b.createdAt) || 0;
        return ta !== tb ? ta - tb : a.publicId.localeCompare(b.publicId, 'sk', { numeric: true });
      })
    }))
    .filter(b => b.images.length > 0)
    .sort((a, b) => a.path.localeCompare(b.path, 'sk'));

  const manifest = {
    generatedAt: new Date().toISOString(),
    cloudName: CLOUD_NAME,
    totalImages: folders.reduce((s, f) => s + f.images.length, 0),
    folders
  };

  const outPath = path.join(__dirname, '../assets/gallery-manifest.json');
  fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2), 'utf-8');

  console.log(`✓ Wrote ${folders.length} folders / ${manifest.totalImages} images → assets/gallery-manifest.json`);
  console.log('  Commit this file and deploy — gallery will use it with zero Cloudinary API calls.');
}

main().catch(err => { console.error('✗', err.message); process.exit(1); });
