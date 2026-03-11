const Exam = require('../models/Exam');
const asyncHandler = require('express-async-handler');

// @desc Get a specific exam by examID
// @route GET /exams/:examID
const getExamQuestions = asyncHandler(async (request, response) => {
    // Serach MongoDB for an exam that matches with the examID
    const exam = await Exam.findOne({ examID: request.params.examID });
    // If it cannot find one send a 404 Not Found error message
    if (!exam) {
        return response.status(404).json({ message: "Exam not found" });
    }
    // If found send the exam data to the frontend
    response.json(exam);
});

module.exports = {
    getExamQuestions
}