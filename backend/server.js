const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const corsOptions = require('./config/corsOptions')
require('dotenv').config();

// Import Routes
const quizRoutes = require('./routes/QuizRoutes');
const progressRoutes = require('./routes/ProgressRoutes');
const examRoutes = require('./routes/ExamRoutes');
const userRoutes = require('./routes/UserRoutes');
const subjectRoutes = require('./routes/SubjectRoutes');
const collectibleRoutes = require('./routes/CollectibleRoutes');
// Initialize the app
const app = express();
// Middleware
app.use(cors(corsOptions));
app.use(express.json());
// Mapping specfic URL paths to route files
app.use('/quizzes', quizRoutes);
app.use('/progresses', progressRoutes);
app.use('/exams', examRoutes);
app.use('/users', userRoutes);
app.use('/subjects', subjectRoutes);
app.use('/collectibles', collectibleRoutes);
// Connecting to the MongoDB Atlas Cluster
mongoose.connect(process.env.MONGO_URI)
  // Only runs if connection is successful 
  .then(() => console.log("MongoDB Connected..."))
  // Runs if connection fails
  .catch(err => console.log(err));
// Defining the Port number (8080)
const PORT = process.env.PORT || 8080;
// Start the server
app.listen(PORT, () => console.log(`Server is purring on port ${PORT}`));