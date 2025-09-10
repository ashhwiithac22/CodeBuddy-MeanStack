const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');

// GET /api/progress/user-progress
router.get('/user-progress', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user.progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/progress/update
router.post('/update', auth, async (req, res) => {
  try {
    const { difficulty, score, topic } = req.body;
    const user = await User.findById(req.user.userId);
    
    // Update progress
    user.progress.totalSolved += 1;
    user.progress.totalScore += score;
    
    if (difficulty === 'easy') user.progress.easySolved += 1;
    if (difficulty === 'medium') user.progress.mediumSolved += 1;
    if (difficulty === 'hard') user.progress.hardSolved += 1;
    
    // Update streak (simplified logic)
    const today = new Date();
    const lastActivity = new Date(user.progress.lastActivity);
    
    if (today.toDateString() !== lastActivity.toDateString()) {
      user.progress.streak += 1;
    }
    
    user.progress.lastActivity = today;
    
    // Update topic progress
    if (topic) {
      const topicIndex = user.topics.findIndex(t => t.name === topic);
      if (topicIndex !== -1) {
        user.topics[topicIndex].solved += 1;
      }
    }
    
    await user.save();
    res.json(user.progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;