import { Routes, Route } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';
import SubjectPage from './pages/SubjectPage';
import QuizPage from './pages/QuizPage';
import ShelfPage from './pages/ShelfPage';

function App() {
  return (
    <Routes>
      {/* Channel 1: The Home Page (Dashboard) */}
      <Route path="/" element={<StudentDashboard />} />
      {/* Channel 2: The Subject Page */}
      <Route path="/subject/:subjectId" element={<SubjectPage />} />
      {/* Channel 3: The Quiz Page */}
      <Route path="/quiz/:topicId" element={<QuizPage />} />
      {/* Channel 4: The Shelf Page */}
      <Route path="/shelf" element={<ShelfPage />} />
    </Routes>
  );
}

export default App
