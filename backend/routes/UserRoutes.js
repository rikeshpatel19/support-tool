const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get user by ID
router.get('/:id', async (request, response) => {
  // try-catch block used to handle any database or server errors safely
  try {
    // Search the database for a user matching the provided ID
    const user = await User.findById(request.params.id);
    // Send the user data back to the frontend
    response.json(user);
    // If the try crashes, catch the error
  } catch (error) {
    // Return a 500 error if the user isn't found or the ID is invalid
    response.status(500).json({ message: "User not found" });
  }
});

router.post('/login', async (request, response) => {
  // Get the username and password
  const { username, password } = request.body;
  // try-catch block used to handle any database or server errors safely
  try {
    // Look for a user in MongoDB that matches the provided username
    const user = await User.findOne({ username });
    // If no user is found with that username
    if (!user) {
      // Send a 404 error indicating the user doesn't exist
      return response.status(404).json({ message: "User not found" });
    }
    // Compare the provided password with the password stored in the database
    if (user.password !== password) {
      // Send a 401 error if the passwords do not match
      return response.status(401).json({ message: "Invalid credentials" });
    }
    // If successful, send the user data back to the frontend
    response.json(user);
    // If the try crashes, catch the error
  } catch (error) {
    // Send a 500 error if a database or connection error occurs
    response.status(500).json({ message: "Server error" });
  }
});

module.exports = router;