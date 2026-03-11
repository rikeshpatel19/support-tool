const mongoose = require('mongoose');
const Question = require('../models/Question');
const Quiz = require('../models/Quiz');
const Exam = require('../models/Exam');
require('dotenv').config();

const { quizData } = require('./data/quizData');
const { examData } = require('./data/examData');

const seedAll = async () => {
    try {
        // Using Mongoose to connect to Atlas using the URI stored in the .env file
        await mongoose.connect(process.env.MONGO_URI);
        // Log a success message to the console once the connection is established
        console.log("Connected to database for seeding");
        // Clear existing questions, quizzes and exams to avoid duplicates every time the script runs
        await Question.deleteMany({});
        await Quiz.deleteMany({});
        await Exam.deleteMany({});
        console.log("Existing data cleared");

        // Seed Quizzes
        for (const item of quizData) {
            // Add new questions to the Questions database
            const newQuestions = await Question.insertMany(
                item.questions.map(q => ({ ...q, quizID: item.quizID }))
            );
            // Prepare quiz object
            const quizObject = {
                quizID: item.quizID,
                subject: item.subject,
                name: item.name,
                type: item.type,
                // If static, map the IDs of the questions
                fixedQuestions: item.type === 'static' ? newQuestions.map(q => q._id) : []
            };
            // If a passage exists, add it
            if (item.passage) {
                quizObject.passage = item.passage;
            }
            // Save the quiz object to MongoDB
            await Quiz.create(quizObject);
        }

        // Seed Exams
        for (const item of examData) {
            // Add new questions to the Questions database
            const newQuestions = await Question.insertMany(
                // Difficulty is required, default to 3
                item.questions.map(q => ({ ...q, quizID: item.examID, difficulty: 3 }))
            );
            // Prepare exam object
            const examObject = {
                examID: item.examID,
                title: item.title,
                subjectID: item.subjectID,
                timeLimit: item.timeLimit,
                totalQuestions: item.totalQuestions,
                questions: newQuestions.map(q => q._id)
            };
            // If a passage exists, add it
            if (item.passage) {
                examObject.passage = item.passage;
            }
            // Save the exam object to MongoDB
            await Exam.create(examObject);
        }
        // Log a success message once all data is safely in the database
        console.log("Database Seeded Successfully!");
        // Terminate
        process.exit();
        // If the try crashes, catch the error
    } catch (error) {
        // Log the specific error to the console to help with debugging
        console.error("Error seeding database:", error);
        // Terminate with error code (1) to indicate a failure
        process.exit(1);
    }
};

seedAll();