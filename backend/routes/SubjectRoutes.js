const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');

// Get all subjects
router.get('/', async (request, response) => {
  const subjects = await Subject.find();
  response.json(subjects);
});

// Get one specific subject 
router.get('/:id', async (request, response) => {
  const subject = await Subject.findOne({ subjectID: request.params.id });
  response.json(subject);
});

module.exports = router;