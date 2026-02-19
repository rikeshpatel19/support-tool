const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  // Stores the ID of the student
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // Stores the ID of the specific quiz or exam
  topicID: { type: String, required: true }, 
  // An object that stores answers as key-value pairs (e.g., { "0": "A", "1": "C" })
  userAnswers: { type: Object, default: {} }, 
  // Tracks which question the student is currently viewing (starts at 0)
  currentQuestionIndex: { type: Number, default: 0 },
  // Check if the student has finished the quiz or exam
  isCompleted: { type: Boolean, default: false },
  // Date and time stored when the progress is updated
  lastUpdated: { type: Date, default: Date.now }
});

// Ensure a user only has one progress record per topic
ProgressSchema.index({ userID: 1, topicID: 1 }, { unique: true });

module.exports = mongoose.model('Progress', ProgressSchema);