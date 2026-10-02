import { Router } from 'express';
import { listUsers, getUser, createUser, updateUser, deleteUser } from './user.controller';
import { authMiddleware, authorize } from '../../middleware/auth.middleware';
import { validateBody } from '../../middleware/validate.middleware';
import { createUserSchema, updateUserSchema } from './user.schema';

const router = Router();

// Semua route di bawah ini khusus admin
router.use(authMiddleware, authorize('admin'));

router.get('/', listUsers);
router.get('/:id', getUser);
router.post('/', validateBody(createUserSchema), createUser);
router.patch('/:id', validateBody(updateUserSchema), updateUser);
router.delete('/:id', deleteUser);

export default router;
