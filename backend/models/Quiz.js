const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  // Unique ID to distinguish topics + challenges
  quizID: { type: String, required: true, unique: true },
  // Subject that the quiz belongs to 
  subjectID: { type: String, required: true },
  // Name of the quiz 
  name: { type: String, required: true },
  // Used to distinguish static and dynamic quizzes
  type: { type: String, enum: ['static', 'dynamic'], default: 'static' },
  // Numerical value of total questions that make up the quiz
  totalQuestions: { type: Number, required: true },
  // Stores IDs of the quiz questions in a specfic order for static quizzes
  fixedQuestions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  // Optional object for reading comprehension passages
  passage: {
    title: { type: String },
    author: { type: String },
    synopsis: { type: String },
    text: { type: String }
  }
});

module.exports = mongoose.model('Quiz', QuizSchema);