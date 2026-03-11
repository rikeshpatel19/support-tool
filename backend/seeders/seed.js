const mongoose = require('mongoose');
const Quiz = require('../models/Quiz');
require('dotenv').config();

const quizData = [
  {
    quizID: "mc1",
    subject: "Maths",
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
  },
  {
    quizID: "mc2",
    subject: "Maths",
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
  },
  {
    quizID: "mc3",
    subject: "Maths",
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
  },
  {
    quizID: "enc1",
    subject: "English",
    passage:
    {
      title: "The Swiss Family Robinson",
      author: "Johann David Wyss",
      synopsis: "",
      text: ""
    },
    questions: [
      {
        difficulty: 1,
        question_text: "At what time of year is the passage set?",
        options: ["winter", "spring", "rainy season", "mid-summer", "autumn"],
        correct_option: "spring"
      },
      {
        difficulty: 1,
        question_text: "The father compares himself and his family to prisoners set free. Why? (lines 2–3)",
        options: [
          "They had been held hostage by pirates.", 
          "They had been trapped in their cave", 
          "They had been trapped in their house due to stormy weather.", 
          "They had been caught in heavy rain which had finally stopped.", 
          "They had been unfairly accused of crimes but the accusations had been dropped."
        ],
        correct_option: "They had been trapped in their house due to stormy weather."
      },
      {
        difficulty: 2,
        question_text: "‘The winds at length were lulled’ (line 1) What is another way of saying ‘lulled’?",
        options: ["rhythmic", "weakened", "welcomed", "rocked", "calmed"],
        correct_option: "calmed"
      },
      {
        difficulty: 2,
        question_text: "Why might the author have decided to include water references in the first paragraph? (lines 1–5)",
        options: [
          "The heavy rain had recently stopped.", 
          "Rain was still falling heavily.", 
          "Water makes the setting seem more peaceful.", 
          "The family hadn’t had a drink for a long time.", 
          "The family have found themselves on an island surrounded by water."
        ],
        correct_option: "The heavy rain had recently stopped."
      },
      {
        difficulty: 1,
        question_text: "How many adjectives can you count in the sentence beginning “We refreshed our eyes…”? (lines 3–5)",
        options: ["1", "2", "3", "4", "5"],
        correct_option: "4"
      }
    ]
  },
  {
    quizID: "vrc1",
    subject: "Verbal Reasoning",
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
  },
  {
    quizID: "nvrc1",
    subject: "Non-Verbal Reasoning",
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