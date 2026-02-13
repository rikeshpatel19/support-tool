const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

// Get a specific quiz by topicID
router.get('/:topicID', async (request, response) => {
  // try-catch block used to handle any database or server errors safely
  try {
    // Serach MongoDB for a quiz that matches with the topicID
    const quiz = await Quiz.findOne({ topicID: request.params.topicID });
    // If it cannot find one send a 404 Not Found error message
    if (!quiz) {
      return response.status(404).json({ message: "Quiz not found" });
    }
    // If found send the quiz data to the frontend
    response.json(quiz);
    // If the try crashes, catch the error and send the error message to the console
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

module.exports = router;