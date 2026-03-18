const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
    // Stores the ID of the specific exam
    examID: { type: String, required: true },
    // Stores the ID of the assosciated subject
    subjectID: { type: String, required: true },
    // Stores the display title of the specific exam (e.g., "Maths Mock Exam 1")
    title: { type: String, required: true },
    // Stores the time limit in seconds (e.g., 3000 for 50 mins)
    timeLimit: { type: Number, required: true },
    // The total number of questions contained in this specific exam
    totalQuestions: { type: Number, required: true },
    // Stores IDs of the exam questions
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    // Optional object for reading comprehension passages
    passage: {
        title: { type: String },
        author: { type: String },
        synopsis: { type: String },
        text: { type: String }
    }
});

module.exports = mongoose.model('Exam', ExamSchema);