const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    // Quiz that the question is associated with
    quizID: { type: String, required: true },
    // Subject that the question is associated with
    subjectID: { type: String, required: true },
    // Numerical difficulty level
    difficulty: { type: Number, required: true },
    // The actual text of the question being asked
    question_text: { type: String, required: true },
    // Array of strings representing the possible answers
    options: [String],
    // The correct answer from the options array
    correct_option: { type: String, required: true },
    // URL or file path for an image, if the question needs a diagram (defaults to null)
    question_image: { type: String, default: null },
    // Explanation about specfic question
    explanation: { type: String }
});

module.exports = mongoose.model('Question', QuestionSchema);