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

// Deal with logging in
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

// Deal with registering
router.post('/register', async (request, response) => {
    // Destructure the data sent from the Register form
    const { firstName, surname, username, email, password } = request.body;

    try {
        // Check if a user with that username already exists to prevent duplicates
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return response.status(400).json({ message: "Username already taken" });
        }
        // Create a new User based on the User Schema
        const newUser = new User({
            firstName,
            surname,
            username,
            email,
            password,
            points: 0, // New students start with zero points
            completedQuizzes: [],
            avatar: 'cat_mascot', // Default starter avatar
            inventory: [] // Empty inventory to start
        });
        // Save the new user to MongoDB Atlas
        const savedUser = await newUser.save();
        // Send back the new user data so the frontend can log them in immediately
        response.status(201).json(savedUser);
    } catch (error) {
        // Handle server or database connection errors
        response.status(500).json({ message: "Registration failed: " + error.message });
    }
});

module.exports = router;