const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // First Name of user
  firstName: { type: String, required: true, trim: true },
  // Surname of user
  surname: { type: String, required: true, trim: true },
  // Unique username for each user
  username: { type: String, required: true, unique: true, trim: true },
  // Parent email
  email: { type: String, required: true, unique: true },
  // Password for each user
  password: { type: String, required: true },
  // Total points that a user has earnt
  points: { type: Number, default: 0 },
  // Quizzes that the user has completed
  completedQuizzes: [{
    topicID: String,
    score: Number,
    percentage: Number,
    date: { type: Date, default: Date.now }
  }],
  // Avatar that the user can customise
  avatar: { type: String, default: 'cat_mascot' },
  // An array to store the figures that a user has collected
  inventory: { type: [String], default: [] }
});

module.exports = mongoose.model('User', UserSchema);