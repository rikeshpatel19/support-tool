// 1. MOCK USER (Matches 'Users' Schema)
export const MOCK_USER = {
  _id: "user_001",
  username: "Rikesh",
  points: 1250,
  avatar: "cat_mascot",
  srs_level: 2, 
  inventory: ["robot_figure", "wizard_figure"]
};

// 2. MOCK QUESTIONS (Matches 'Questions' Schema)
export const MOCK_QUESTIONS = [
  {
    _id: "q_101",
    type: "GENERAL",
    subject: "NVR",
    topic: "Nets",
    difficulty: 2,
    question_text: "Which of these nets folds into a cube?",
    question_image: "Image",
    options: ["A", "B", "C", "D"],
    correct_option: "B",
  },
  {
    _id: "q_102",
    type: "GENERAL",
    subject: "English",
    topic: "Synonyms",
    difficulty: 1,
    question_text: "Select the synonym for: ABANDON",
    options: ["Keep", "Leave", "Join", "Build"],
    correct_option: "Leave",
  }
];

// 3. MOCK COLLECTIBLES (The 12 items on the shelf)
export const ALL_COLLECTIBLES = [
  { id: "robot_figure", name: "Classic Robot", icon: "🤖" },
  { id: "wizard_figure", name: "Wizard", icon: "🧙‍♂️" },
  { id: "cat_figure", name: "Super Cat", icon: "😼" },
  { id: "alien_figure", name: "Alien", icon: "👽" },
  { id: "ghost_figure", name: "Ghost", icon: "👻" },
  { id: "dragon_figure", name: "Dragon", icon: "🐉" },
  { id: "ninja_figure", name: "Ninja", icon: "🥷" },
  { id: "rockstar_figure", name: "Rockstar", icon: "🎸" },
  { id: "detective_figure", name: "Detective", icon: "🕵️‍♀️" },
  { id: "dino_figure", name: "T-Rex", icon: "🦖" },
  { id: "astro_figure", name: "Astronaut", icon: "👨‍🚀" },
  { id: "superhero_figure", name: "Superhero", icon: "🦸" },
];

// 4. MOCK SUBJECT DATA
export const SUBJECT_DATA = {
  maths: {
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
  english: {
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
  verbal_reasoning: {
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
  non_verbal_reasoning: {
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
};

// 5. SPECIFIC QUIZ DATA: Maths Challenge 1
export const MATHS_CHALLENGE_1 = [
  {
    difficulty: 1,
    _id: "q_101",
    question_text: "What is the area of the square below?",
    question_image: "/images/square.png",
    options: ["7", "8", "9", "10", "16"],
    correct_option: "16"
  },
  {
    _id: "q_102",
    difficulty: 1,
    question_text: "Which number is even?",
    options: ["3", "7", "10", "15", "17"],
    correct_option: "10"
  },
  {
    _id: "q_103",
    difficulty: 2,
    question_text: "What is 100 - 25?",
    options: ["50", "65", "75", "85", "95"],
    correct_option: "75"
  },
  {
    _id: "q_104",
    difficulty: 2,
    question_text: "What is 6 x 6?",
    options: ["30", "36", "42", "48", "54"],
    correct_option: "36"
  }
];

// 6. FAKE API FUNCTIONS (Called from the UI)
export const getUser = async () => {
  // Simulate a 0.5 second server delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_USER), 500);
  });
};

export const getQuestions = async (quizId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
        // Hardcoded to return Maths Challenge 1.
        resolve(MATHS_CHALLENGE_1); 
    }, 500);
  });
};

export const getSubjectById = async (subjectId) => {
  return new Promise((resolve) => {
    // Simulate server delay
    setTimeout(() => {
      const data = SUBJECT_DATA[subjectId];
      resolve(data || null); // Return data or null if not found
    }, 500); 
  });
};

export const getSubjects = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Returns the whole object
      resolve(SUBJECT_DATA); 
    }, 500);
  });
};