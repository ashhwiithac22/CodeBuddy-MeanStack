const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  
  // Progress tracking fields
  progress: {
    totalSolved: { type: Number, default: 0 },
    easySolved: { type: Number, default: 0 },
    mediumSolved: { type: Number, default: 0 },
    hardSolved: { type: Number, default: 0 },
    totalScore: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    lastActivity: { type: Date, default: Date.now }
  },
  
  // Topic progress
  topics: [{
    topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
    name: String,
    solved: { type: Number, default: 0 },
    total: { type: Number, default: 0 }
  }],
  
  // Daily challenges completed
  dailyChallenges: [{
    date: Date,
    completed: Boolean,
    score: Number
  }]
});

module.exports = mongoose.model('User', userSchema);