import { Routes, Route } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';
import SubjectPage from './pages/SubjectPage';
import TestPage from './pages/TestPage';
import QuizPage from './pages/QuizPage';
import ShopPage from './pages/ShopPage';
import ShelfPage from './pages/ShelfPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      {/* Channel 1: The Home Page (Dashboard) */}
      <Route path="/" element={<StudentDashboard />} />
      {/* Channel 2: The Subject Page */}
      <Route path="/subject/:subjectId" element={<SubjectPage />} />
      {/* Channel 3: The Test Page */}
      <Route path="/test" element={<TestPage />} />
      {/* Channel 4: The Quiz Page */}
      <Route path="/quiz/:subjectId/:topicId" element={<QuizPage />} />
      {/* Channel 5: The Shop Page */}
      <Route path="/shop" element={<ShopPage />} />
      {/* Channel 6: The Shelf Page */}
      <Route path="/shelf" element={<ShelfPage />} />
      {/* Channel 7: The Login Page */}
      <Route path="/login" element={<LoginPage />} />
      {/* Channel 8: The Register Page */}
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App
