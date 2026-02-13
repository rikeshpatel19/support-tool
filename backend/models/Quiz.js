const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  // Numerical difficulty level
  difficulty: { type: Number, required: true },
  // The actual text of the question being asked
  question_text: { type: String, required: true },
  // Array of strings representing the possible answers
  options: [String],
  // The correct answer from the options array
  correct_option: { type: String, required: true },
  // URL or file path for an image, if the question needs a diagram (defaults to null)
  question_image: { type: String, default: null }
});

const QuizSchema = new mongoose.Schema({
  // Unique ID to distinguish topics + challenges
  topicID: { type: String, required: true, unique: true },
  // Subject that the quiz belongs to 
  subject: { type: String, required: true },
  // Optional string for reading comprehension passages
  passage_text: { type: String, default: "" },
  // An array of question objects
  questions: [QuestionSchema] 
});

module.exports = mongoose.model('Quiz', QuizSchema);