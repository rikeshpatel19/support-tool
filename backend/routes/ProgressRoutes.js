const express = require('express');
const router = express.Router();
const {saveQuizProgress, getQuizProgress, getSubjectProgress, finaliseQuizResults, getResultsByUser} = require('../controllers/progressesController');

router.route('/:userID/progress/:topicID').patch(saveQuizProgress) .get(getQuizProgress);
router.route('/:userID/progress/subject/:subjectID').get(getSubjectProgress);
router.route('/:userID/results/:topicID').post(finaliseQuizResults);
router.route('/:userID/results').get(getResultsByUser);

module.exports = router;