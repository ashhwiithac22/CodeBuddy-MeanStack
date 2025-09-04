// backend/routes/questionRoutes.js
import express from 'express';
const router = express.Router();
import { getQuestions, getDailyQuestions, getInterviewQuestion } from '../controllers/questionController.js';

router.route('/').get(getQuestions);
router.route('/daily').get(getDailyQuestions);
router.route('/interview').get(getInterviewQuestion);

export default router;