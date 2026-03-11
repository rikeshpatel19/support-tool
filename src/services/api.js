const API_URL = import.meta.env.VITE_API_URL;

// --- USERS ---

// Get user by ID
export const getUser = async (userID) => {
  try {
    const response = await fetch(`${API_URL}/users/${userID}`);

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
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
export const completeQuiz = async (userID, topicID, points, percentage) => {
  const response = await fetch(`${API_URL}/users/${userID}/complete-quiz`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topicID, pointsEarned: points, percentage: percentage })
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

// Get a specific quiz by topicID
export const getQuestions = async (topicID) => {
  try {
    const response = await fetch(`${API_URL}/quizzes/${topicID}`);
    const data = await response.json();
    // We return the whole quiz object so QuizPage.jsx can check for passage_text
    return data;
  } catch (error) {
    console.error("Error fetching quiz:", error);
    return null;
  }
};

// --- PROGRESSES ---

// Saves partial progress for a quiz
export const saveQuizProgress = async (userID, topicID, data) => {
  const response = await fetch(`${API_URL}/progresses/${userID}/progress/${topicID}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      subjectID: data.subjectID,
      progressPercent: data.progress,
      userAnswers: data.userAnswers,
      currentQuestionIndex: data.currentQuestionIndex,
      isCompleted: false
    }),
  });
  return response.json();
};

// Retrieve partial progress for a quiz
export const getQuizProgress = async (userID, topicID) => {
  try {
    const response = await fetch(`${API_URL}/progresses/${userID}/progress/${topicID}`);
    if (!response.ok) return null; // Return null if no progress exists yet
    return await response.json();
  } catch (error) {
    console.error("Fetch progress error:", error);
    return null;
  }
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
export const finaliseQuizResults = async (userID, topicID, data) => {
  const response = await fetch(`${API_URL}/progresses/${userID}/results/${topicID}`, {
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
  try {
    const response = await fetch(`${API_URL}/exams/${examID}`);
    const data = await response.json();
    // We return the whole exam object so ExamPage.jsx can check for passage_text
    return data;
  } catch (error) {
    console.error("Error fetching exam:", error);
    return null;
  }
};

// --- COLLECTIBLES ---

// Get all collectibles
export const getAllCollectibles = async () => {
  const response = await fetch(`${API_URL}/collectibles`);
  return await response.json();
};



