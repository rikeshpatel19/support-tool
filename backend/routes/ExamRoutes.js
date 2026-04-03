const express = require('express');
const router = express.Router();
const { getExam, markExam } = require('../controllers/examsController');

router.route('/:examID').get(getExam);
router.route('/:examID/mark').post(markExam);

module.exports = router;