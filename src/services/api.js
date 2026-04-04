const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

// Standardised wrapper for all API calls to ensure consistent data/error handling
// "endpoint" is the URL path (e.g. /users/login)
// "options" is the fetch configuration (method, body, custom headers)
const apiRequest = async (endpoint, options = {}) => {
  try {
    // Request uses the global API URL and the specfic endpoint
    const response = await fetch(`${API_URL}${endpoint}`, {
      // Spreads options (method, body, custom headers)
      ...options,
      // Merges default JSON content type with any custom headers passed in from options
      headers: { 'Content-Type': 'application/json', ...options.headers }
    });
    // Stores response from server
    const payload = await response.json();
    // Checks if the server responded with an error code
    if (!response.ok) {
      // Consistent error message 
      return { data: null, error: payload.message || "An unexpected error occurred" };
    }
    // If succesful, returns payload and sets error to null
    return { data: payload, error: null };
  } catch (error) {
    // Catches network failure or server being offline
    console.error(`Error at [${endpoint}]:`, error);
    return { data: null, error: "Network error. Please check your connection or try again later." };
  }
};

// --- USERS ---

// Get user by ID
export const getUser = (userID) => {
  if (!userID) {
    return { data: null, error: "No User ID provided" };
  }
  return apiRequest(`/users/${userID}`);
}

// Login user
export const loginUser = (credentials) =>
  apiRequest('/users/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  });

// Register new user
export const registerUser = (userData) =>
  apiRequest('/users/register', {
    method: 'POST',
    body: JSON.stringify(userData)
  });

// Update Account Details
export const updateProfile = (userID, userData) =>
  apiRequest(`/users/${userID}/update-profile`, {
    method: 'PATCH',
    body: JSON.stringify(userData)
  });

// Add points and record completed quiz
export const completeQuiz = (userID, quizID, subjectID, points, percentage, nextDifficulty) =>
  apiRequest(`/users/${userID}/complete-quiz`, {
    method: 'POST',
    body: JSON.stringify({
      quizID,
      subjectID,
      pointsEarned: points,
      percentage,
      lastDifficulty: nextDifficulty
    })
  });

// Purchase shop item
export const purchaseItem = (userID, collectibleID, price) =>
  apiRequest(`/users/${userID}/purchase`, {
    method: 'POST',
    body: JSON.stringify({ collectibleID, price })
  });

// --- SUBJECTS ---

// Get all subjects
export const getSubjects = () => apiRequest(`/subjects`);

// Add result for a completed quiz and clear progress 
export const getSubjectByID = (subjectID) => apiRequest(`/subjects/${subjectID}`);

// --- QUIZZES ---

// Get quiz along with questions (empty if dynamic) using quizID
export const getQuiz = (quizID) => apiRequest(`/quizzes/quiz/${quizID}`);

// Get dynamic questions using quizID, subjectID and difficulty
export const getDynamicQuestions = (quizID, subjectID, difficulty) =>
  apiRequest(`/quizzes/dynamic?quizID=${quizID}&subjectID=${subjectID}&difficulty=${difficulty}`);

// Get questions using an array of question IDs
export const getQuestionsByIDs = (questionIDs) =>
  apiRequest('/quizzes/questions', {
    method: 'POST',
    body: JSON.stringify({ questionIDs })
  });

// --- PROGRESSES ---

// Saves partial progress for a quiz
export const saveQuizProgress = (userID, quizID, data) =>
  apiRequest(`/progresses/${userID}/progress/${quizID}`, {
    method: 'PATCH',
    body: JSON.stringify(data)
  });

// Retrieve partial progress for a quiz
export const getQuizProgress = (userID, quizID) => apiRequest(`/progresses/${userID}/progress/${quizID}`);

// Retrieve all saved progress associated with a user for a specific subject
export const getSubjectProgress = (userID, subjectID) => apiRequest(`/progresses/${userID}/progress/subject/${subjectID}`);

// Add result for a completed quiz and clear progress 
export const finaliseQuizResults = (userID, subjectID, quizID, data) =>
  apiRequest(`/progresses/${userID}/results/${subjectID}/${quizID}`, {
    method: 'POST',
    body: JSON.stringify(data)
  });

// Retrieve all saved results associated with a user
export const getResultsByUser = (userID) => apiRequest(`/progresses/${userID}/results`);

// --- EXAMS ---

// Get a specific exam by examID
export const getExam = (examID) => apiRequest(`/exams/${examID}`);

// Marks an exam, returns a final score and percentage + answers
export const markExam = (data) =>
  apiRequest(`/exams/${data.examID}/mark`, {
    method: 'POST',
    body: JSON.stringify(data)
  });

// --- COLLECTIBLES ---

// Get all collectibles
export const getCollectibles = () => apiRequest(`/collectibles`);