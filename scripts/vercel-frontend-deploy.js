#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const action = process.argv[2];

if (!['build', 'deploy'].includes(action)) {
  console.error('Usage: node scripts/vercel-frontend-deploy.js build|deploy');
  process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');
const vercelDir = path.join(rootDir, '.vercel');
const rootProjectJson = path.join(vercelDir, 'project.json');
const frontendProjectJson = path.join(vercelDir, 'project.json.frontend-backup');

if (!fs.existsSync(frontendProjectJson)) {
  console.error('Missing .vercel/project.json.frontend-backup. Link the frontend project first: npx vercel link --yes --scope=darksimperium --project=osk-kamenna-poruba');
  process.exit(1);
}

const frontendConfig = JSON.parse(fs.readFileSync(frontendProjectJson, 'utf8'));

if (frontendConfig.projectName !== 'osk-kamenna-poruba') {
  console.error(`Unexpected frontend Vercel project in backup: ${frontendConfig.projectName || 'unknown'}`);
  process.exit(1);
}

if (!fs.existsSync(rootProjectJson) || fs.readFileSync(rootProjectJson, 'utf8') !== fs.readFileSync(frontendProjectJson, 'utf8')) {
  fs.copyFileSync(frontendProjectJson, rootProjectJson);
}

const command = action === 'build'
  ? 'npx vercel build --prod'
  : 'npx vercel deploy --prebuilt --prod';

execSync(command, { cwd: rootDir, stdio: 'inherit' });