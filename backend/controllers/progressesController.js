const Progress = require('../models/Progress');
const Result = require('../models/Result');
const asyncHandler = require('express-async-handler');

// @desc Saves partial progress for a quiz
// @route PATCH /progresses/:userID/progress/:topicID
const saveQuizProgress = asyncHandler(async (request, response) => {
    const { userID, topicID } = request.params;
    const { subjectID, progressPercent, userAnswers, currentQuestionIndex, isCompleted } = request.body;

    const progress = await Progress.findOneAndUpdate(
        { userID, topicID },
        {
            subjectID,
            progressPercent,
            userAnswers,
            currentQuestionIndex,
            isCompleted,
            lastUpdated: Date.now()
        },
        { upsert: true, new: true } // Creates record if missing
    );
    response.json(progress);
});

// @desc Retrieve partial progress for a quiz
// @route GET /progresses/:userID/progress/:topicID
const getQuizProgress = asyncHandler(async (request, response) => {
    const { userID, topicID } = request.params;
    const progress = await Progress.findOne({ userID, topicID });
    if (!progress) {
        return response.status(404).json({ message: "No progress found" });
    }
    response.json(progress);
});

// @desc Retrieve all saved progress assosciated with a user for a specfic subject
// @route GET /progresses/:userID/progress/subject/:subjectID
const getSubjectProgress = asyncHandler(async (request, response) => {
    const { userID, subjectID } = request.params;
    const progress = await Progress.find({ userID, subjectID });
    response.json(progress);
});

// @desc Add result for a completed quiz and clear progress 
// @route POST /progresses/:userID/results/:topicID
const finaliseQuizResults = asyncHandler(async (request, response) => {
    const { userID, topicID } = request.params;
    const { score, totalQuestions, percentage } = request.body;

    // Check how many results already exist for this topic
    const existingResults = await Result.find({ userID, topicID }).sort({ completedAt: 1 });

    // If there are 20 or more, delete the oldest one
    if (existingResults.length >= 20) {
        const oldestID = existingResults[0]._id;
        await Result.findByIdAndDelete(oldestID);
    }

    const resultObject = new Result({ userID, topicID, score, totalQuestions, percentage, completedAt: Date.now() });
    // Create and store new result based on the Result Schema
    const newResult = await Result.create(resultObject);

    // Delete the temporary progress record
    await Progress.findOneAndDelete({ userID, topicID });

    response.status(201).json({ message: "Result saved (Max 20) and progress cleared", result: newResult });
});

// @desc Retrieve all saved progress assosciated with a user
// @route GET /progresses/:userID/results
const getResultsByUser = asyncHandler(async (request, response) => {
    const results = await Result.find({ userID: request.params.userID });
    response.json(results);
});

module.exports = {
    saveQuizProgress,
    getQuizProgress,
    getSubjectProgress,
    finaliseQuizResults,
    getResultsByUser
}




