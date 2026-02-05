const API_URL = 'http://localhost:5000/api';

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

// Requires Commenting
export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  
  return await response.json();
};

export const getUser = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    
    if (!response.ok) {
       throw new Error(`Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

export const getQuestions = async (topicId) => {
  try {
    const response = await fetch(`${API_URL}/quizzes/${topicId}`);
    const data = await response.json();
    // We return the whole quiz object so QuizPage.jsx can check for passage_text
    return data;
  } catch (error) {
    console.error("Error fetching quiz:", error);
    return null;
  }
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