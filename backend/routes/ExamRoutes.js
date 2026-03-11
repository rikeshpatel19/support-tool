const express = require('express');
const router = express.Router();
const { getExamQuestions } = require('../controllers/examsController');

router.route('/:examID').get(getExamQuestions);

module.exports = router;