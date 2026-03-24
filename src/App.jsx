import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import StartPage from './pages/StartPage';
import StudentDashboard from './pages/StudentDashboard';
import ReviewPage from './pages/ReviewPage';
import SubjectPage from './pages/SubjectPage';
import TestPage from './pages/TestPage';
import QuizPage from './pages/QuizPage';
import ShopPage from './pages/ShopPage';
import ShelfPage from './pages/ShelfPage';
import ParentDashboard from './pages/ParentDashboard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ExamPage from './pages/ExamPage';

function App() {
  // State to track which user is logged in 
  const [user, setUser] = useState(null);

  return (
    <Routes>
      {/* Channel 1: The Start Page */}
      <Route path="/" element={<StartPage />} />
      {/* Channel 2: The Home Page (Dashboard) */}
      <Route path="/sd" element={<ProtectedRoute><StudentDashboard user={user} /></ProtectedRoute>} />
      {/* Channel 3: The Review Page */}
      <Route path="/review" element={<ProtectedRoute><ReviewPage /></ProtectedRoute>} />
      {/* Channel 4: The Subject Page */}
      <Route path="/subject/:subjectID" element={<ProtectedRoute><SubjectPage /></ProtectedRoute>} />
      {/* Channel 5: The Test Page */}
      <Route path="/test" element={<ProtectedRoute><TestPage /></ProtectedRoute>} />
      {/* Channel 6: The Quiz Page */}
      <Route path="/quiz/:subjectID/:quizID" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
      {/* Channel 7: The Shop Page */}
      <Route path="/shop" element={<ProtectedRoute><ShopPage /></ProtectedRoute>} />
      {/* Channel 8: The Shelf Page */}
      <Route path="/shelf" element={<ProtectedRoute><ShelfPage /></ProtectedRoute>} />
      {/* Channel 9: The Parent Dashboard */}
      <Route path="/parent" element={<ProtectedRoute><ParentDashboard /></ProtectedRoute>} />
      {/* Channel 10: The Login Page */}
      <Route path="/login" element={<LoginPage setUser={setUser} />} />
      {/* Channel 11: The Register Page */}
      <Route path="/register" element={<RegisterPage />} />
      {/* Channel 12: The Exam Page */}
      <Route path="/test/:subjectID/:examID" element={<ProtectedRoute><ExamPage /></ProtectedRoute>} />
    </Routes>
  );
}

export default App
