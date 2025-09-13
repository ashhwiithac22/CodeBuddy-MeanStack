// backend/server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import topicRoutes from './routes/topicRoutes.js';
import questionRoutes from './routes/questionRoutes.js';
import setDailyQuestions from './utils/dailyCron.js';
import cors from 'cors';
dotenv.config();

// Load environment variables

// Connect to database
connectDB();

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200', // Your Angular app
  credentials: true
}));

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api/questions', questionRoutes);

// Run the daily cron job once on server start
setDailyQuestions();

// Define a simple root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🔥`);
});