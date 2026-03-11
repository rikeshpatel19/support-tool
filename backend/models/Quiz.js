const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  // Unique ID to distinguish topics + challenges
  quizID: { type: String, required: true, unique: true },
  // Subject that the quiz belongs to 
  subject: { type: String, required: true },
  // Name of the quiz 
  name: { type: String, required: true },
  // Used to distinguish static and dynamic quizzes
  type: { type: String, enum: ['static', 'dynamic'], default: 'static' },
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