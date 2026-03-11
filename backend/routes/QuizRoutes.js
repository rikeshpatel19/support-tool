const express = require('express');
const router = express.Router();
const { getQuestions } = require('../controllers/quizzesController');

router.route('/:topicID').get(getQuestions);

module.exports = router;