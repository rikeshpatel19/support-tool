const express = require('express');
const router = express.Router();
const { getQuestions } = require('../controllers/quizzesController');

router.route('/:quizID').get(getQuestions);

module.exports = router;