const express = require('express');
const router = express.Router();
const { getExam } = require('../controllers/examsController');

router.route('/:examID').get(getExam);

module.exports = router;