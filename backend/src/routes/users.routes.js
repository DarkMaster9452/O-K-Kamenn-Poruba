const express = require('express');
const bcrypt = require('bcryptjs');
const { z } = require('zod');
const { requireAuth, requireRole } = require('../middleware/auth');
const { validateBody } = require('../middleware/validate');
const {
  listUsersForManagement,
  createManagedUser,
  setUserActiveStatus,
  resetUserPasswordByAdmin,
  updateUserRoleAndCategory,
  createAuditLog,
  findUserById
} = require('../data/repository');

const router = express.Router();

const playerCategorySchema = z.enum([
  'pripravka_u9',
  'pripravka_u11',
  'ziaci',
  'dorastenci',
  'adults_young',
  'adults_pro'
]);

const createUserSchema = z.object({
  username: z.string().min(3).max(100),
  email: z.string().email().max(254).nullable().optional(),
  password: z.string().min(8).max(200),
  role: z.enum(['admin', 'coach', 'player', 'parent']),
  playerCategory: playerCategorySchema.nullable().optional(),
  isActive: z.boolean().default(true)
});

const resetPasswordSchema = z.object({
  newPassword: z.string().min(8).max(200)
});

const userStatusSchema = z.object({
  isActive: z.boolean()
});

const updateUserProfileSchema = z.object({
  role: z.enum(['admin', 'coach', 'player', 'parent']),
  playerCategory: playerCategorySchema.nullable().optional()
});

async function writeAuditSafe(payload) {
  try {
    await createAuditLog(payload);
  } catch (error) {
    console.error('Audit log write failed:', error);
  }
}

router.use(requireAuth, requireRole('admin'));

router.get('/', async (req, res) => {
  const rows = await listUsersForManagement();
  return res.json({ items: rows });
});

router.post('/', validateBody(createUserSchema), async (req, res) => {
  const { username, email, password, role, playerCategory, isActive } = req.body;

  if (role === 'player' && !playerCategory) {
    return res.status(400).json({ message: 'Pre hráča je povinná kategória.' });
  }

  if (role !== 'player' && playerCategory) {
    return res.status(400).json({ message: 'Kategóriu je možné nastaviť iba pre hráča.' });
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const created = await createManagedUser({
    username: username.trim(),
    email: email ? email.trim().toLowerCase() : null,
    role,
    playerCategory: role === 'player' ? playerCategory : null,
    passwordHash,
    isActive
  });

  await writeAuditSafe({
    actorUserId: req.user.id,
    action: 'user_created',
    entityType: 'user',
    entityId: created.id,
    details: {
      username: created.username,
      role: created.role,
      playerCategory: created.playerCategory,
      isActive: created.isActive
    }
  });

  return res.status(201).json({ item: created });
});

router.patch('/:id/status', validateBody(userStatusSchema), async (req, res) => {
  const targetUser = await findUserById(req.params.id);
  if (!targetUser) {
    return res.status(404).json({ message: 'Používateľ neexistuje.' });
  }

  if (targetUser.id === req.user.id && !req.body.isActive) {
    return res.status(400).json({ message: 'Nemôžete deaktivovať vlastný účet.' });
  }

  const updated = await setUserActiveStatus(req.params.id, req.body.isActive);

  await writeAuditSafe({
    actorUserId: req.user.id,
    action: req.body.isActive ? 'user_activated' : 'user_deactivated',
    entityType: 'user',
    entityId: updated.id,
    details: { username: updated.username }
  });

  return res.json({ item: updated });
});

router.patch('/:id/reset-password', validateBody(resetPasswordSchema), async (req, res) => {
  const targetUser = await findUserById(req.params.id);
  if (!targetUser) {
    return res.status(404).json({ message: 'Používateľ neexistuje.' });
  }

  const passwordHash = await bcrypt.hash(req.body.newPassword, 12);
  const updated = await resetUserPasswordByAdmin(req.params.id, passwordHash);

  await writeAuditSafe({
    actorUserId: req.user.id,
    action: 'user_password_reset',
    entityType: 'user',
    entityId: updated.id,
    details: { username: updated.username }
  });

  return res.json({ message: 'Heslo bolo resetované.' });
});

router.patch('/:id/profile', validateBody(updateUserProfileSchema), async (req, res) => {
  const targetUser = await findUserById(req.params.id);
  if (!targetUser) {
    return res.status(404).json({ message: 'Používateľ neexistuje.' });
  }

  const { role, playerCategory } = req.body;

  if (role === 'player' && !playerCategory) {
    return res.status(400).json({ message: 'Pre hráča je povinná kategória.' });
  }

  if (role !== 'player' && playerCategory) {
    return res.status(400).json({ message: 'Kategóriu je možné nastaviť iba pre hráča.' });
  }

  if (targetUser.id === req.user.id && role !== 'admin') {
    return res.status(400).json({ message: 'Nemôžete zmeniť vlastnú rolu z admina.' });
  }

  const updated = await updateUserRoleAndCategory(
    req.params.id,
    role,
    role === 'player' ? playerCategory : null
  );

  await writeAuditSafe({
    actorUserId: req.user.id,
    action: 'user_profile_updated',
    entityType: 'user',
    entityId: updated.id,
    details: {
      username: updated.username,
      role: updated.role,
      playerCategory: updated.playerCategory
    }
  });

  return res.json({ item: updated });
});

module.exports = router;
