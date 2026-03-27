const Question = require('../models/Question');
const Exam = require('../models/Exam');
const asyncHandler = require('express-async-handler');

// @desc Get a specific exam by examID
// @route GET /exams/:examID
const getExam = asyncHandler(async (request, response) => {
    // Serach MongoDB for an exam that matches with the examID + populates it with questions
    const exam = await Exam.findOne({ examID: request.params.examID }).populate('questions');
    // If it cannot find one send a 404 Not Found error message
    if (!exam) {
        return response.status(404).json({ message: "Exam not found" });
    }
    // If found send the exam data to the frontend
    response.json(exam);
});

module.exports = {
    getExam
}