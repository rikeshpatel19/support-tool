const Subject = require('../models/Subject');
const asyncHandler = require('express-async-handler');

// @desc Get all subjects
// @route GET /subjects
const getSubjects = asyncHandler(async (request, response) => {
    const subjects = await Subject.find();
    response.json(subjects);
});

// @desc Get specfic subject by ID
// @route GET /subjects/:id
const getSubjectByID = asyncHandler(async (request, response) => {
    const subject = await Subject.findOne({ subjectID: request.params.id });
    response.json(subject);
});

module.exports = {
    getSubjects,
    getSubjectByID
}

