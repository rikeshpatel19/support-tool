import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import StartPage from './pages/StartPage';
import StudentDashboard from './pages/StudentDashboard';
import SubjectPage from './pages/SubjectPage';
import TestPage from './pages/TestPage';
import QuizPage from './pages/QuizPage';
import ShopPage from './pages/ShopPage';
import ShelfPage from './pages/ShelfPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ExamPage from './pages/ExamPage';
import { getUser } from './services/api';

function App() {
  // State to track which user is logged in 
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Attempts to find a user ID in local storage
    const storedID = localStorage.getItem("userID");
    // Checks if the user ID exists 
    if (!storedID) {
      console.log("User session not found, waiting for login");
      return;
    }
    const initUser = async () => {
      try {
        const data = await getUser(storedID);
        // If the data exists, update the global state so all pages can see it
        if (data) setUser(data);
      } catch (error) {
        console.error("Failed to fetch user on app start:", error);
      }
    };
    initUser();
  }, []); // The empty array ensures this only runs once

  return (
    <Routes>
      {/* Channel 1: The Start Page */}
      <Route path="/" element={<StartPage />} />
      {/* Channel 2: The Home Page (Dashboard) */}
      <Route path="/sd" element={<ProtectedRoute><StudentDashboard user={user} /></ProtectedRoute>} />
      {/* Channel 3: The Subject Page */}
      <Route path="/subject/:subjectID" element={<ProtectedRoute><SubjectPage /></ProtectedRoute>} />
      {/* Channel 4: The Test Page */}
      <Route path="/test" element={<ProtectedRoute><TestPage /></ProtectedRoute>} />
      {/* Channel 5: The Quiz Page */}
      <Route path="/quiz/:subjectID/:topicID" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
      {/* Channel 6: The Shop Page */}
      <Route path="/shop" element={<ProtectedRoute><ShopPage /></ProtectedRoute>} />
      {/* Channel 7: The Shelf Page */}
      <Route path="/shelf" element={<ProtectedRoute><ShelfPage /></ProtectedRoute>} />
      {/* Channel 8: The Login Page */}
      <Route path="/login" element={<LoginPage setUser={setUser} />} />
      {/* Channel 9: The Register Page */}
      <Route path="/register" element={<RegisterPage />} />
      {/* Channel 10: The Exam Page */}
      <Route path="/test/:subjectID/:examID" element={<ProtectedRoute><ExamPage /></ProtectedRoute>} />
    </Routes>
  );
}

export default App
