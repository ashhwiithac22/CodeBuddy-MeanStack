// backend/routes/userRoutes.js
import express from 'express';
import { registerUser, getUserProfile } from '../controllers/userController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /api/users (register)
router.post('/', registerUser);

// GET /api/users/profile (protected route)
router.get('/profile', protect, getUserProfile);

export default router;
