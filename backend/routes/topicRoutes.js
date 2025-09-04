// backend/routes/topicRoutes.js
import express from 'express';
const router = express.Router();
import { getTopics, getTopicByName } from '../controllers/topicController.js';

router.route('/').get(getTopics);
router.route('/:name').get(getTopicByName);

export default router;