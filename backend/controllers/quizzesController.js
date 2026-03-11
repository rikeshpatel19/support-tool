const Quiz = require('../models/Quiz');
const asyncHandler = require('express-async-handler');

// @desc Get a specific quiz by quizID
// @route GET /quizzes/:quizID
const getQuestions = asyncHandler(async (request, response) => {
    // Serach MongoDB for a quiz that matches with the quizID
    const quiz = await Quiz.findOne({ quizID: request.params.quizID });
    // If it cannot find one send a 404 Not Found error message
    if (!quiz) {
      return response.status(404).json({ message: "Quiz not found" });
    }
    // If found send the quiz data to the frontend
    response.json(quiz);
});

module.exports = {
    getQuestions
}
