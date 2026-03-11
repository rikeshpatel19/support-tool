const Quiz = require('../models/Quiz');
const asyncHandler = require('express-async-handler');

// @desc Get a specific quiz by topicID
// @route GET /quizzes/:topicID
const getQuestions = asyncHandler(async (request, response) => {
    // Serach MongoDB for a quiz that matches with the topicID
    const quiz = await Quiz.findOne({ topicID: request.params.topicID });
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
