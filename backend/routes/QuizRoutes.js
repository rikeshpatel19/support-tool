const express = require('express');
const router = express.Router();
const { getQuiz, getDynamicQuestions, getQuestionsByIDs } = require('../controllers/quizzesController');

router.route('/quiz/:quizID').get(getQuiz);
router.route('/dynamic').get(getDynamicQuestions);
router.route('/fetchQuestions').post(getQuestionsByIDs);

module.exports = router;