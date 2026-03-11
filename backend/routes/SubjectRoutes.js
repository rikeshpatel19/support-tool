const express = require('express');
const router = express.Router();
const {getSubjects, getSubjectByID} = require('../controllers/subjectsController');

router.route('/') .get(getSubjects);
router.route('/:id') .get(getSubjectByID);

module.exports = router;