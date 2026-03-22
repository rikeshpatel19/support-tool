const API_URL = import.meta.env.VITE_API_URL;

// --- USERS ---

// Get user by ID
export const getUser = async (userID) => {
  try {
    const response = await fetch(`${API_URL}/users/${userID}`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

// Login user
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

// Register new user
export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    // If the username is taken, the backend sends a 400 error
    const errorData = await response.json();
    throw new Error(errorData.message || 'Registration failed');
  }

  return await response.json();
};

// Update Account Details
export const updateProfile = async (userID, userData) => {
  const response = await fetch(`${API_URL}/users/${userID}/update-profile`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  // Checks if the server responded with an error code
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to update profile');
  }
  return response.json();
};

// Add points and record completed quiz
export const completeQuiz = async (userID, quizID, subjectID, points, percentage, nextDifficulty) => {
  const response = await fetch(`${API_URL}/users/${userID}/complete-quiz`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quizID, subjectID, pointsEarned: points, percentage: percentage, lastDifficulty: nextDifficulty })
  });
  return await response.json();
};

// Purchase shop item
export const purchaseItem = async (userID, itemID, price) => {
  const response = await fetch(`${API_URL}/users/${userID}/purchase`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ itemID, price })
  });
  return await response.json();
};

// --- SUBJECTS ---

// Get all subjects
export const getSubjects = async () => {
  try {
    const response = await fetch(`${API_URL}/subjects`);
    if (!response.ok) throw new Error("Failed to fetch subjects");
    return await response.json(); // Returns an array of subjectIDs
  } catch (error) {
    console.error("Error:", error);
    return []; // Return empty array on error
  }
};

// Get specfic subject by ID
export const getSubjectByID = async (subjectID) => {
  const response = await fetch(`${API_URL}/subjects/${subjectID}`);
  return await response.json();
};

// --- QUIZZES ---

// Get quiz along with questions (empty if dynamic) using quizID
export const getQuiz = async (quizID) => {
  const response = await fetch(`${API_URL}/quizzes/quiz/${quizID}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return await response.json();
};

// Get dynamic questions using quizID, subjectID and difficulty
export const getDynamicQuestions = async (quizID, subjectID, difficulty) => {
  try {
    const response = await fetch(`${API_URL}/quizzes/dynamic?quizID=${quizID}&subjectID=${subjectID}&difficulty=${difficulty}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching dynamic quiz:", error);
    return null;
  }
};

// Get questions using an array of question IDs
export const getQuestionsByIDs = async (questionIDs) => {
  try {
    const response = await fetch(`${API_URL}/quizzes/fetchQuestions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionIDs })
    });
    if (!response.ok) throw new Error("Failed to fetch questions by IDs");
    return await response.json();
  } catch (error) {
    console.error("Error fetching specific questions:", error);
    return [];
  }
};

// --- PROGRESSES ---

// Saves partial progress for a quiz
export const saveQuizProgress = async (userID, quizID, data) => {
  const response = await fetch(`${API_URL}/progresses/${userID}/progress/${quizID}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

// Retrieve partial progress for a quiz
export const getQuizProgress = async (userID, quizID) => {
  const response = await fetch(`${API_URL}/progresses/${userID}/progress/${quizID}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return await response.json();
};

// Retrieve all saved progress assosciated with a user for a specfic subject
export const getSubjectProgress = async (userID, subjectID) => {
  try {
    const response = await fetch(`${API_URL}/progresses/${userID}/progress/subject/${subjectID}`);
    if (!response.ok) return []; // Returns an empty array if no progress exists
    return await response.json(); // Returns an array of progress objects
  } catch (error) {
    console.error("Error fetching all progress for subject:", error);
    return [];
  }
};

// Add result for a completed quiz and clear progress 
export const finaliseQuizResults = async (userID, subjectID, quizID, data) => {
  const response = await fetch(`${API_URL}/progresses/${userID}/results/${subjectID}/${quizID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
};

// Retrieve all saved progress assosciated with a user
export const getResultsByUser = async (userID) => {
  const response = await fetch(`${API_URL}/progresses/${userID}/results`);
  if (!response.ok) return [];
  return await response.json();
};

// --- EXAMS ---

// Get a specific exam by examID
export const getExamQuestions = async (examID) => {
  const response = await fetch(`${API_URL}/exams/${examID}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return await response.json();
};

// --- COLLECTIBLES ---

// Get all collectibles
export const getAllCollectibles = async () => {
  const response = await fetch(`${API_URL}/collectibles`);
  return await response.json();
};



