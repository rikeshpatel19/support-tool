const API_URL = 'http://localhost:5000/api';

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

export const getAllCollectibles = async () => {
  const response = await fetch(`${API_URL}/collectibles`);
  return await response.json();
};

export const getSubjectById = async (subjectID) => {
  const response = await fetch(`${API_URL}/subjects/${subjectID}`);
  return await response.json();
};

export const getSubjects = async () => {
  try {
    const response = await fetch(`${API_URL}/subjects`);
    if (!response.ok) throw new Error("Failed to fetch subjects");
    return await response.json(); // Returns an array: [{subjectId: 'maths', ...}, ...]
  } catch (error) {
    console.error("Error:", error);
    return []; // Return empty array on error
  }
};