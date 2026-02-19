const mongoose = require('mongoose');
const Subject = require('./models/Subject');
require('dotenv').config();

const subjectData = [
    {
        subjectID: "maths",
        title: "Maths",
        topics: [
            { id: 'm1', name: "Addition", status: 'gold' },
            { id: 'm2', name: "Subtraction", status: 'silver' },
            { id: 'm3', name: "Multiplication", status: 'bronze' }
        ],
        challenges: [
            { id: 'mc1', name: "Speed Math", status: 'gold' },
            { id: 'mc2', name: "Mental Math", status: 'none' },
            { id: 'mc3', name: "Word Problems", status: 'none' }
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
            { id: 'en1', name: "Grammar", status: 'silver' },
            { id: 'en2', name: "Spelling", status: 'none' },
            { id: 'en3', name: "Punctuation", status: 'none' }
        ],
        challenges: [
            { id: 'enc1', name: "Vocab Blast", status: 'bronze' },
            { id: 'enc2', name: "Spelling Bee", status: 'none' },
            { id: 'enc3', name: "Reading Comp", status: 'none' }
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
            { id: 'vr1', name: "VR Topic 1", status: 'silver' },
            { id: 'vr2', name: "VR Topic 2", status: 'none' },
            { id: 'vr3', name: "VR Topic 3", status: 'none' }
        ],
        challenges: [
            { id: 'vrc1', name: "VR Challenge 1", status: 'bronze' },
            { id: 'vrc2', name: "VR Challenge 2", status: 'none' },
            { id: 'vrc3', name: "VR Challenge 3", status: 'none' }
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
            { id: 'nvr1', name: "NVR Topic 1", status: 'silver' },
            { id: 'nvr2', name: "NVR Topic 2", status: 'none' },
            { id: 'nvr3', name: "NVR Topic 3", status: 'none' }
        ],
        challenges: [
            { id: 'nvrc1', name: "NVR Challenge 1", status: 'bronze' },
            { id: 'nvrc2', name: "NVR Challenge 2", status: 'none' },
            { id: 'nvrc3', name: "NVR Challenge 3", status: 'none' }
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