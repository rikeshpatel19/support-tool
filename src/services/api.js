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

// 4. FAKE API FUNCTIONS (Called from the UI)
export const getUser = async () => {
  // Simulate a 0.5 second server delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_USER), 500);
  });
};

export const getQuestions = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_QUESTIONS), 500);
  });
};