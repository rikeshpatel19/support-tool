const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  // Stores the ID of the student
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // Stores the ID of the specific quiz or exam
  subjectID: { type: String, required: true },
  // Stores the ID of the specific quiz or exam
  quizID: { type: String, required: true },
  // Stores numerical score achieved in the specfic quiz or exam
  score: { type: Number, required: true },
  // Stores the number of questions the student actually answered
  questionsAnswered: { type: Number, required: true },
  // Total number of questions 
  totalQuestions: { type: Number, required: true },
  // Stores percentage achieved in the specfic quiz or exam
  percentage: { type: Number, required: true },
  // Date and time of completion 
  completedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Result', ResultSchema);