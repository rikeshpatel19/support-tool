const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // Name of student
  studentName: { type: String, required: true, trim: true },
  // Name of parent
  parentName: { type: String, required: true, trim: true },
  // Unique username for each user
  username: { type: String, required: true, unique: true, trim: true },
  // Parent email
  email: { type: String, required: true, unique: true },
  // Password for each user
  password: { type: String, required: true },
  // Total points that a user has earnt
  points: { type: Number, default: 0 },
  // Stores IDs of quizzes that the user has completed alongside their best score
  completedQuizzes: [{
    quizID: { type: String },
    subjectID: { type: String },
    bestPercentage: { type: Number, default: 0 },
    latestPercentage: { type: Number, default: 0 }, // Used for Spaced Retrieval System
    lastDifficulty: { type: Number, default: 3 }, // Used to adjust difficulty for the next attempt 
    completedAt: { type: Date, default: Date.now } // Date and time of completion 
  }],
  // Avatar that the user can customise
  avatar: { type: String, default: 'Cat' },
  // An array to store the figures that a user has collected
  inventory: { type: [String], default: [] }
});

module.exports = mongoose.model('User', UserSchema);