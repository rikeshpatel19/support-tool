import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  // State to track which user is logged in 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initUser = async () => {
      // Attempts to find a userID in local storage, fallback ID prevents the app from crashing
      const userID = localStorage.getItem("userID") || "6982319c0085bc676ec4c938";
      // Get the user profile for this specfic userID
      const data = await getUser(userID);
      // If the data exists, update the global state so all pages can see it
      if (data) setUser(data);
    };
    initUser();
  }, []); // The empty array ensures this only runs once

  return (
    <Routes>
      {/* Channel 1: The Start Page */}
      <Route path="/" element={<StartPage />} />
      {/* Channel 2: The Home Page (Dashboard) */}
      <Route path="/sd" element={<StudentDashboard user={user} />} />
      {/* Channel 3: The Subject Page */}
      <Route path="/subject/:subjectID" element={<SubjectPage />} />
      {/* Channel 4: The Test Page */}
      <Route path="/test" element={<TestPage />} />
      {/* Channel 5: The Quiz Page */}
      <Route path="/quiz/:subjectID/:topicID" element={<QuizPage />} />
      {/* Channel 6: The Shop Page */}
      <Route path="/shop" element={<ShopPage />} />
      {/* Channel 7: The Shelf Page */}
      <Route path="/shelf" element={<ShelfPage />} />
      {/* Channel 8: The Login Page */}
      <Route path="/login" element={<LoginPage setUser={setUser} />} />
      {/* Channel 9: The Register Page */}
      <Route path="/register" element={<RegisterPage />} />
      {/* Channel 10: The Exam Page */}
      <Route path="/test/:subjectID/:examID" element={<ExamPage />} />
    </Routes>
  );
}

export default App
