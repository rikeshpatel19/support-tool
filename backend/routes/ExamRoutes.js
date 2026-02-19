const express = require('express');
const router = express.Router();
const Exam = require('../models/Exam');

router.get('/:examID', async (request, response) => {
  try {
    // Serach MongoDB for an exam that matches with the examID
    const exam = await Exam.findOne({ examID: request.params.examID });
    // If it cannot find one send a 404 Not Found error message
    if (!exam) {
      return response.status(404).json({ message: "Exam not found" });
    }
    // If found send the exam data to the frontend
    response.json(exam);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

module.exports = router;