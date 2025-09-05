// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, getUserProfile } = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

// POST /api/users (register)
router.post('/', registerUser);

// GET /api/users/profile (protected route)
router.get('/profile', protect, getUserProfile);

module.exports = router;