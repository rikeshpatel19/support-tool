const mongoose = require('mongoose');
const Quiz = require('./models/Quiz');
require('dotenv').config();

const quizData = [
  {
    topicId: "enc3",
    subject: "English",
    passage_text: "In the heart of the Silicon Forest lived a pixelated cat named Gizmo...",
    questions: [
      {
        difficulty: 1,
        question_text: "Where does Gizmo live?",
        options: ["The Mainframe Oak", "Silicon Forest", "A mouse hole", "The glowing bricks"],
        correct_option: "Silicon Forest"
      },
      {
        difficulty: 1,
        question_text: "What does Gizmo chase?",
        options: ["Mice", "Bugs in code", "Laser pointers", "Birds"],
        correct_option: "Bugs in code"
      }
    ]
  },
  {
    topicId: "mc1",
    subject: "Maths",
    passage_text: "", // No passage for Maths
    questions: [
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 2,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      }
    ]
  }
];

const seedDB = async () => {
  try {
    // Using Mongoose to connect to Atlas using the URI stored in the .env file
    await mongoose.connect(process.env.MONGO_URI);
    // Log a success message to the console once the connection is established
    console.log("Connected to database for seeding");
    // Clear existing quizzes to avoid duplicates every time the script runs
    await Quiz.deleteMany({});
    // Insert the data
    await Quiz.insertMany(quizData);
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

seedDB();