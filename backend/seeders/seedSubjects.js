const mongoose = require('mongoose');
const Subject = require('../models/Subject');
require('dotenv').config();

const subjectData = [
    {
        subjectID: "maths",
        title: "Maths",
        topics: [
            { id: 'm1', name: "Addition" },
            { id: 'm2', name: "Subtraction" },
            { id: 'm3', name: "Multiplication" }
        ],
        challenges: [
            { id: 'mc1', name: "Speed Math" },
            { id: 'mc2', name: "Mental Math" },
            { id: 'mc3', name: "Word Problems" }
        ],
        exams: [
            { id: 'me1', name: "Maths Exam 1" },
            { id: 'me2', name: "Maths Exam 2" },
            { id: 'me3', name: "Maths Exam 3" }
        ]
    },
    {
        subjectID: "english",
        title: "English",
        topics: [
            { id: 'en1', name: "Grammar" },
            { id: 'en2', name: "Spelling" },
            { id: 'en3', name: "Punctuation" }
        ],
        challenges: [
            { id: 'enc1', name: "Vocab Blast" },
            { id: 'enc2', name: "Spelling Bee" },
            { id: 'enc3', name: "Reading Comp" }
        ],
        exams: [
            { id: 'ene1', name: "English Exam 1" },
            { id: 'ene2', name: "English Exam 2" },
            { id: 'ene3', name: "English Exam 3" }
        ]
    },
    {
        subjectID: "vr",
        title: "Verbal Reasoning",
        topics: [
            { id: 'vr1', name: "VR Topic 1" },
            { id: 'vr2', name: "VR Topic 2" },
            { id: 'vr3', name: "VR Topic 3" }
        ],
        challenges: [
            { id: 'vrc1', name: "VR Challenge 1" },
            { id: 'vrc2', name: "VR Challenge 2" },
            { id: 'vrc3', name: "VR Challenge 3" }
        ],
        exams: [
            { id: 'vre1', name: "VR Exam 1" },
            { id: 'vre2', name: "VR Exam 2" },
            { id: 'vre3', name: "VR Exam 3" }
        ]
    },
    {
        subjectID: "nvr",
        title: "Non-Verbal Reasoning",
        topics: [
            { id: 'nvr1', name: "NVR Topic 1" },
            { id: 'nvr2', name: "NVR Topic 2" },
            { id: 'nvr3', name: "NVR Topic 3" }
        ],
        challenges: [
            { id: 'nvrc1', name: "NVR Challenge 1" },
            { id: 'nvrc2', name: "NVR Challenge 2" },
            { id: 'nvrc3', name: "NVR Challenge 3" }
        ],
        exams: [
            { id: 'nvre1', name: "NVR Exam 1" },
            { id: 'nvre2', name: "NVR Exam 2" },
            { id: 'nvre3', name: "NVR Exam 3" }
        ]
    }
];

const seedSubjects = async () => {
    try {
        // Using Mongoose to connect to Atlas using the URI stored in the .env file
        await mongoose.connect(process.env.MONGO_URI);
        // Log a success message to the console once the connection is established
        console.log("Connected to database for seeding");
        // Clear existing subjects to avoid duplicates every time the script runs
        await Subject.deleteMany({});
        // Insert the data
        await Subject.insertMany(subjectData);
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

seedSubjects();