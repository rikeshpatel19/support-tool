const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');
const Result = require('../models/Result');

// POST Final Results and Clear Progress
router.post('/:userID/results/:topicID', async (request, response) => {
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

    response.status(201).json({ message: "Result saved (Max 20) and progress cleared", result: newResult });
  } catch (error) {
    response.status(500).json({ message: "Error finalising quiz" });
  }
});

// Get all results assosciated with a user
router.get('/:userID/results', async (request, response) => {
  try {
    const results = await Result.find({ userID: request.params.userID });
    response.json(results);
  } catch (error) {
    response.status(500).json({ message: "Error fetching results" });
  }
});

// GET Saved Progress (Loading)
router.get('/:userID/progress/:topicID', async (request, response) => {
  const { userID, topicID } = request.params;
  try {
    const progress = await Progress.findOne({ userID, topicID });
    if (!progress) return response.status(404).json({ message: "No progress found" });
    response.json(progress);
  } catch (error) {
    response.status(500).json({ message: "Server error" });
  }
});

// GET All progress for a user for a specfic subject
router.get('/:userID/progress/subject/:subjectID', async (request, response) => {
  try {
    const { userID, subjectID } = request.params;
    const progress = await Progress.find({ userID, subjectID });
    response.json(progress);
  } catch (error) {
    response.status(500).json({ message: "Error fetching subject progress" });
  }
});

// PATCH Saved Progress (Saving)
router.patch('/:userID/progress/:topicID', async (request, response) => {
  const { userID, topicID } = request.params;
  const { subjectID, progressPercent, userAnswers, currentQuestionIndex, isCompleted } = request.body;

  try {
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
  } catch (error) {
    response.status(500).json({ message: "Error saving progress" });
  }
});

module.exports = router;