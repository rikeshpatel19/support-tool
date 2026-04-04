const Progress = require('../models/Progress');
const Result = require('../models/Result');
const asyncHandler = require('express-async-handler');

// @desc Saves partial progress for a quiz or creates it if it does not exist
// @route PATCH /progresses/:userID/progress/:quizID
const saveQuizProgress = asyncHandler(async (request, response) => {
    const { userID, quizID } = request.params;
    const { subjectID, score, questionsAnswered, progressPercent, userAnswers, currentQuestionIndex, batchScore, dynamicQuestionIDs, currentDifficulty } = request.body;

    const updatedData = {
        subjectID,
        score,
        questionsAnswered,
        progressPercent,
        userAnswers,
        currentQuestionIndex,
        lastUpdated: Date.now()
    };

    // Check if batchScore was provided (Only for dynamic quizzes)
    if (batchScore !== undefined) {
        updatedData.batchScore = batchScore;
    }

    // Check if dynamicQuestionIDs was provided (Only for dynamic quizzes)
    if (dynamicQuestionIDs !== undefined) {
        updatedData.dynamicQuestionIDs = dynamicQuestionIDs;
    }

    // Check if currentDifficulty was provided (Only for dynamic quizzes)
    if (currentDifficulty !== undefined) {
        updatedData.currentDifficulty = currentDifficulty;
    }

    const progress = await Progress.findOneAndUpdate(
        { userID, quizID }, // Finds a record matching both the userID and quizID
        updatedData, // Updates it with the new data
        {
            upsert: true, // Creates record if missing
            new: true // Ensures the updated record is returned, not the old one
        }
    );
    response.json(progress);
});

// @desc Retrieve partial progress for a quiz
// @route GET /progresses/:userID/progress/:quizID
const getQuizProgress = asyncHandler(async (request, response) => {
    const { userID, quizID } = request.params;
    const progress = await Progress.findOne({ userID, quizID });
    if (!progress) {
        return response.json({ message: "No progress found" });
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
// @route POST /progresses/:userID/results/:quizID
const finaliseQuizResults = asyncHandler(async (request, response) => {
    const { userID, subjectID, quizID } = request.params;
    const { score, questionsAnswered, totalQuestions, percentage } = request.body;

    // Check how many results already exist for this topic
    const existingResults = await Result.find({ userID, quizID }).sort({ completedAt: 1 });

    // If there are 20 or more, delete the oldest one
    if (existingResults.length >= 20) {
        const oldestID = existingResults[0]._id;
        await Result.findByIdAndDelete(oldestID);
    }

    const resultObject = new Result({ userID, subjectID, quizID, score, questionsAnswered, totalQuestions, percentage, completedAt: Date.now() });
    // Create and store new result based on the Result Schema
    const newResult = await Result.create(resultObject);

    // Delete the temporary progress record
    await Progress.findOneAndDelete({ userID, quizID });

    response.status(201).json({ message: "Result saved (Max 20) and progress cleared", result: newResult });
});

// @desc Retrieve all saved progress assosciated with a user
// @route GET /progresses/:userID/results
const getResultsByUser = asyncHandler(async (request, response) => {
    const userID = request.params.userID;
    const [results, progresses] = await Promise.all([
        Result.find({ userID }),
        Progress.find({ userID })
    ]);
    // Progresses is formatted so it matches the Results structure
    const normalisedProgress = progresses.map(progress => ({ ...progress.toObject(), completedAt: progress.lastUpdated }))
    const combined = [...results, ...normalisedProgress];
    response.json(combined);
});

module.exports = {
    saveQuizProgress,
    getQuizProgress,
    getSubjectProgress,
    finaliseQuizResults,
    getResultsByUser
}