const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
    // Stores the ID of the specific exam
    examID: { type: String, required: true },
    // Stores the display title of the specific exam (e.g., "Maths Mock Exam 1")
    title: { type: String, required: true },
    // Stores the ID of the assosciated subject
    subjectID: { type: String, required: true },
    // Stores the time limit in seconds (e.g., 3000 for 50 mins)
    timeLimit: { type: Number, required: true },
    // The total number of questions contained in this specific exam
    totalQuestions: { type: Number, required: true },
    // Stores multiple question objects
    questions: [{
        // The actual text of the question being asked
        question_text: { type: String, required: true },
        // Array of strings representing the possible answers
        options: [String],
        // The correct answer from the options array
        correct_option: { type: String, required: true },
        // URL or file path for an image, if the question needs a diagram (defaults to null)
        question_image: { type: String, default: null },
        // Explains the answer, visible only after the exam is submitted
        explanation: String, 
    }]
});

module.exports = mongoose.model('Exam', ExamSchema);