const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  // Unique ID for each subject
  subjectID: { type: String, required: true, unique: true }, // e.g., 'maths'
  // Display title for each subject
  title: { type: String, required: true },
  // Assosciated topics for each subject
  topics: [{ id: String, name: String, status: String }],
  // Assosciated challenges for each subject
  challenges: [{ id: String, name: String, status: String }],
  // Assosciated exams for each subject
  exams: [{ id: String, name: String }]
});

module.exports = mongoose.model('Subject', SubjectSchema);