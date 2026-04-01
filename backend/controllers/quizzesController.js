const Question = require('../models/Question');
const Quiz = require('../models/Quiz');
const asyncHandler = require('express-async-handler');

// @desc Get quiz along with questions (empty if dynamic) using quizID
// @route GET /quizzes/quiz/:quizID
const getQuiz = asyncHandler(async (request, response) => {
    // Search MongoDB for a quiz that matches with the quizID + populates it with questions (empty if dynamic)
    const quiz = await Quiz.findOne({ quizID: request.params.quizID }).populate('fixedQuestions');
    // If it cannot find one send a 404 Not Found error message
    if (!quiz) {
        return response.status(404).json({ message: "Quiz not found" });
    }
    // If found send the quiz data to the frontend
    response.json(quiz);
});

// @desc Get dynamic questions using quizID, subjectID and difficulty
// @route GET /quizzes/dynamic
const getDynamicQuestions = asyncHandler(async (request, response) => {
    const { quizID, subjectID, difficulty } = request.query;

    // Looks for questions that match the quiz, subject and requested difficulty
    const questions = await Question.aggregate([
        {
            $match: {
                quizID: quizID,
                subjectID: subjectID,
                difficulty: Number(difficulty)
            }
        },
        { $sample: { size: 5 } } // $sample grabs 5 random questions from the list of matched questions
    ]);
    // If it cannot find any questions
    if (questions.length === 0) {
        return response.status(404).json({ message: `No Level ${difficulty} questions found for ${quizID}` });
    }
    // Sends the dynamic questions to the frontend
    response.json(questions);
});

// @desc Get questions using an array of question IDs
// @route GET /quizzes/fetchQuestions
const getQuestionsByIDs = asyncHandler(async (request, response) => {
    const { questionIDs } = request.body;
    // Finds all questions whose id is included ($in) in the questionIDs array
    const questions = await Question.find({ _id: { $in: questionIDs } });
    // Re-orders the fetched questions to the order the user had them in
    const orderedQuestions = questionIDs.map(id => questions.find(q => q._id.toString() === id));
    response.json(orderedQuestions);
});

module.exports = {
    getQuiz,
    getDynamicQuestions,
    getQuestionsByIDs
}