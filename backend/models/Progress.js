const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  // Stores the ID of the student
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // Stores the ID of the specific quiz or exam
  quizID: { type: String, required: true }, 
  // Stores the ID of the specific subject
  subjectID: { type: String, required: true }, 
  // Stores an array of question IDs for dynamic quizzes
  dynamicQuestionIDs: [String], 
  // Tracks the progress through a quiz 
  progressPercent: { type: Number, default: 0 },
  // An object that stores answers as key-value pairs (e.g., { "0": "A", "1": "C" })
  userAnswers: { type: Object, default: {} }, 
  // Tracks which question the student is currently viewing (starts at 0)
  currentQuestionIndex: { type: Number, default: 0 },
  // Tracks total score of current batch of questions
  batchScore: { type: Number, default: 0 },
  // Tracks current difficulty of questions
  currentDifficulty: { type: Number, default: 1 },
  // Date and time stored when the progress is updated
  lastUpdated: { type: Date, default: Date.now }
});

// Ensure a user only has one progress record per quiz
ProgressSchema.index({ userID: 1, quizID: 1 }, { unique: true });

module.exports = mongoose.model('Progress', ProgressSchema);