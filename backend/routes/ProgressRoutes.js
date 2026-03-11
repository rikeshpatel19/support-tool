const express = require('express');
const router = express.Router();
const {saveQuizProgress, getQuizProgress, getSubjectProgress, finaliseQuizResults, getResultsByUser} = require('../controllers/progressesController');

router.route('/:userID/progress/:quizID').patch(saveQuizProgress) .get(getQuizProgress);
router.route('/:userID/progress/subject/:subjectID').get(getSubjectProgress);
router.route('/:userID/results/:quizID').post(finaliseQuizResults);
router.route('/:userID/results').get(getResultsByUser);

module.exports = router;