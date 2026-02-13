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

// Add points and record completed quiz
router.post('/:id/complete-quiz', async (request, response) => {
  // Destructures the results sent from the Quiz page
  const { topicID, pointsEarned, score, percentage } = request.body;
  try {
    // Looks for student in MongoDB using the ID from the URL
    const user = await User.findById(request.params.id);
    if (!user) return response.status(404).json({ message: "User not found" });
    // Update the student's total points
    user.points += pointsEarned;
    // Add a new record to the student's "history" array
    user.completedQuizzes.push({
      topicID, // Specfic topic/challenge they completed
      score: score, // Raw score 
      percentage: percentage, // Used to determine Badge 
      date: new Date() // Date of completion
    });
    // Saves all changes to the database
    await user.save();
    // Sends a success message + the new total back to the frontend
    response.json({ message: "Progress saved!", updatedPoints: user.points });
  } catch (error) {
    // If database fails, return a 500 server error
    response.status(500).json({ message: "Error saving progress" });
  }
});

// Handle purchasing an item from the shop
router.post('/:id/purchase', async (request, response) => {
  // Destructures the results sent from the Shop page
  const { itemID, price } = request.body;
  try {
    // Looks for student in MongoDB using the ID from the URL
    const user = await User.findById(request.params.id);
    // Check if student can afford the item
    if (user.points < price) {
      return response.status(400).json({ message: "Not enough points!" });
    }
    // Deduct points
    user.points -= price;
    // Adds item to their inventory, ensures the same item is not added twice
    if (!user.inventory.includes(itemID)) {
      user.inventory.push(itemID);
    }
    // Saves all changes to the database
    await user.save();
    // Sends a success message + the updated inventory and points back to the frontend
    response.json({
      message: "Purchase successful!",
      updatedPoints: user.points,
      inventory: user.inventory
    });
  } catch (error) {
    // If database fails, return a 500 server error
    response.status(500).json({ message: "Purchase failed" });
  }
});

module.exports = router;