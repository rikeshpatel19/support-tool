const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

// @desc Get user by ID
// @route GET /users/:id
const getUser = asyncHandler(async (request, response) => {
    // Search the database for a user matching the provided ID
    const user = await User.findById(request.params.id);
    // Return a 404 error if the user isn't found or the ID is invalid
    if (!user) {
        response.status(404).json({ message: "User not found" });
    }
    response.json(user);
});

// @desc Delete user
// @route DELETE /users
const deleteUser = asyncHandler(async (request, response) => {

});

// @desc Login user
// @route POST /users/login
const loginUser = asyncHandler(async (request, response) => {
    // Get the username and password
    const { username, password } = request.body;

    // Confirm that all required fields have data
    if (!username || !password) {
        return response.status(400).json({ message: "Whoops! It looks like some boxes are still empty. Can you fill them in?" });
    }

    // Look for a user in MongoDB that matches the provided username
    const user = await User.findOne({ username });

    // Return a 404 error if the user isn't found or the ID is invalid
    if (!user) {
        response.status(404).json({ message: "We couldn't find a student with that username. Please try again." });
    }
    else {
        // Function takes the Plain Text Password and the Hashed Password
        const isMatch = await bcrypt.compare(password, user.password);
        // If the passwords match
        if (isMatch) {
            // If successful, send the user data back to the frontend
            response.json(user);
        }
        else {
            // Send a 401 error if the passwords do not match
            return response.status(401).json({ message: "Oops! That username and password is not quite right." });
        }
    }
});

// @desc Register new user
// @route POST /users/register
const registerUser = asyncHandler(async (request, response) => {
    // Destructure the data sent from the Register form
    const { firstName, surname, parentFirstName, parentSurname, username, email, password } = request.body;

    // Confirm that all required fields have data
    if (!firstName || !surname || !parentFirstName || !parentSurname || !username || !email || !password) {
        return response.status(400).json({ message: "Whoops! It looks like some boxes are still empty. Can you fill them in?" });
    }

    // Check if a user with that username already exists to prevent duplicates
    const existingUser = await User.findOne({ username });

    if (existingUser) {
        return response.status(400).json({ message: "Somebody is already using that awesome username! Can you pick a different one?" });
    }

    // Check if a user with that email already exists to prevent duplicates
    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
        return response.status(400).json({ message: "Somebody is already using this email, can you use a different one?" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // 10 Salt rounds

    const userObject = {
        firstName, surname, parentFirstName, parentSurname, username, email, "password": hashedPassword,
        points: 0, // New students start with zero points
        completedQuizzes: [],
        avatar: 'Cat', // Default starter avatar
        inventory: [] // Empty inventory to start
    };

    // Create and store new User based on the User Schema
    const newUser = await User.create(userObject);

    if (newUser) {
        // Send back the new user data so the frontend can log them in immediately
        response.status(201).json(newUser);
    }
    else {
        response.status(400).json({ message: "Registration failed" });
    }
});

// @desc Update Account Details
// @route PATCH /users/:id/update-profile
const updateProfile = asyncHandler(async (request, response) => {
    // Destructures the results sent from the Account Modal
    const { username, email, avatar } = request.body;
    // Searches the database for the user by ID and applies the new data fields
    const updatedUser = await User.findByIdAndUpdate(
        request.params.id, // The ID extracted from the URL
        { username, email, avatar }, // The new values to be saved in the database
        {
            new: true, // Returns the updated document
            runValidators: true // Forces Mongoose to check if the new data follows Schema rules
        }
    );

    // If the ID doesn't exist in the database, stop and return a 404 error
    if (!updatedUser) {
        return response.status(404).json({ message: "User not found" });
    }

    // Sends the updated user object back to the frontend to refresh the UI
    response.json(updatedUser);
});

// @desc Add points and record completed quiz
// @route POST /users/:id/complete-quiz
const completeQuiz = asyncHandler(async (request, response) => {
    // Destructures the results sent from the Quiz page
    const { quizID, subjectID, pointsEarned, percentage, lastDifficulty } = request.body;
    // Get the users unique ID from the URL parameters
    const userID = request.params.id;

    // Increments the total points by the pointsEarned
    await User.findByIdAndUpdate(userID, { $inc: { points: pointsEarned } });

    // Finds the specfic quiz matching the quizID
    const updatedUser = await User.findOneAndUpdate(
        {
            _id: userID,
            "completedQuizzes.quizID": quizID // Match the specific quiz inside the array
        },
        {
            // $ used to update the specific array element that was matched above
            $set: { "completedQuizzes.$.lastDifficulty": lastDifficulty } // Difficulty updated
        },
        { new: true } // Return the document after the update is applied
    );

    if (updatedUser) {
        // Finds the specific object that was just updated in the users completedQuizzes
        const quizIndex = updatedUser.completedQuizzes.findIndex(q => q.quizID === quizID);
        
        // Only update if existing score < new score
        if (percentage > updatedUser.completedQuizzes[quizIndex].bestPercentage) {
            updatedUser.completedQuizzes[quizIndex].bestPercentage = percentage;
            await updatedUser.save(); // Saves changes
        }
    } else {
        // If the quizID was not found, it must be the users first attempt
        await User.updateOne(
            { _id: userID },
            // Adds a new object to the array, $addToSet ensures the same topic is not added twice
            { $addToSet: { completedQuizzes: { quizID, subjectID, bestPercentage: percentage, lastDifficulty: lastDifficulty } }}
        );
    }

    // Return a success message to the frontend
    response.json({ message: "High score (Percentage) and points updated!" });
});

// @desc Purchase shop item
// @route POST /users/:id/purchase
const purchaseItem = asyncHandler(async (request, response) => {
    // Destructures the results sent from the Shop page
    const { itemID, price } = request.body;
    // Looks for student in MongoDB using the ID from the URL
    const user = await User.findById(request.params.id);

    // Check if student can afford the item
    if (user.points < price) {
        return response.status(400).json({ message: "You're almost there! Keep doing quizzes to earn more coins." });
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
    response.json({ message: "Purchase successful!", updatedPoints: user.points, inventory: user.inventory });
});

module.exports = {
    getUser,
    deleteUser,
    loginUser,
    registerUser,
    updateProfile,
    completeQuiz,
    purchaseItem
}