const Question = require('../models/Question');
const Exam = require('../models/Exam');
const asyncHandler = require('express-async-handler');

// @desc Get a specific exam by examID
// @route GET /exams/:examID
const getExam = asyncHandler(async (request, response) => {
    // Serach MongoDB for an exam that matches with the examID + populates it with questions
    // Both correct_option and explanation have been excluded to prevent the user from getting access to answers
    const exam = await Exam.findOne({ examID: request.params.examID }).populate({ path: 'questions', select: '-correct_option -explanation' });
    // If it cannot find one send a 404 Not Found error message
    if (!exam) {
        return response.status(404).json({ message: "Exam not found" });
    }
    // If found send the exam data to the frontend
    response.json(exam);
});

// @desc Marks an exam, returns a final score and percentage + answers
// @route POST /exams/:examID/mark
const markExam = asyncHandler(async (request, response) => {
    const { examID, userAnswers } = request.body;

    // Serach MongoDB for an exam that matches with the examID + populates it with questions
    const exam = await Exam.findOne({ examID: examID }).populate('questions');
    // If it cannot find one send a 404 Not Found error message
    if (!exam) {
        return response.status(404).json({ message: "Exam not found" });
    }

    // Calculate score based on all answers
    let score = 0;
    exam.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct_option) {
            score++;
        }
    });

    // Calculate total percentage to determine grade
    const percentage = Math.round((score / exam.questions.length) * 100);

    // Used to send back the answers to the frontend after the exam is completed
    const answers = exam.questions.map(question => ({
        correct_option: question.correct_option,
        explanation: question.explanation
    }))
    // Sends results to the frontend
    response.status(200).json({ score, percentage, answers, message: "Exam marked successfully" });
});

module.exports = {
    getExam,
    markExam
}