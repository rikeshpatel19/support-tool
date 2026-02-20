const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');
const Result = require('../models/Result');

// Requires Commenting
// POST Final Results and Clear Progress
router.post('/users/:userID/results/:topicID', async (request, response) => {
  const { userID, topicID } = request.params;
  const { score, totalQuestions, percentage } = request.body;

  try {
    // Check how many results already exist for this topic
    const existingResults = await Result.find({ userID, topicID }).sort({ completedAt: 1 });

    // If there are 20 or more, delete the oldest one
    if (existingResults.length >= 20) {
      const oldestID = existingResults[0]._id;
      await Result.findByIdAndDelete(oldestID);
    }

    // Save the new result
    const newResult = new Result({
      userID,
      topicID,
      score,
      totalQuestions,
      percentage,
      completedAt: Date.now()
    });
    await newResult.save();

    // Delete the temporary progress record
    await Progress.findOneAndDelete({ userID, topicID });

    response.status(201).json({ message: "Result saved (Max 5) and progress cleared", result: newResult });
  } catch (error) {
    response.status(500).json({ message: "Error finalising quiz" });
  }
});

// Get all results assosciated with a user
router.get('/users/:userID/results', async (request, response) => {
  try {
    const results = await Result.find({ userID: request.params.userID });
    response.json(results);
  } catch (error) {
    response.status(500).json({ message: "Error fetching results" });
  }
});

// GET Saved Progress (Loading)
router.get('/users/:userID/progress/:topicID', async (request, response) => {
  const { userID, topicID } = request.params;
  try {
    const progress = await Progress.findOne({ userID, topicID });
    if (!progress) return response.status(404).json({ message: "No progress found" });
    response.json(progress);
  } catch (error) {
    response.status(500).json({ message: "Server error" });
  }
});

// PATCH Saved Progress (Saving)
router.patch('/users/:userID/progress/:topicID', async (request, response) => {
  const { userID, topicID } = request.params;
  const { userAnswers, currentQuestionIndex, isCompleted } = request.body;

  try {
    const progress = await Progress.findOneAndUpdate(
      { userID, topicID },
      { 
        userAnswers, 
        currentQuestionIndex, 
        isCompleted, 
        lastUpdated: Date.now() 
      },
      { upsert: true, new: true } // Creates record if missing
    );
    response.json(progress);
  } catch (error) {
    response.status(500).json({ message: "Error saving progress" });
  }
});

module.exports = router;