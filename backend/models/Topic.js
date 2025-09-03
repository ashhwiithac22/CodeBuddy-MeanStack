// backend/models/Topic.js
const mongoose = require('mongoose');

const topicSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  hints: [
    {
      type: String,
      required: true,
    },
  ],
  snippets: [
    {
      type: String,
      required: true,
    },
  ],
});

const Topic = mongoose.model('Topic', topicSchema);
module.exports = Topic;