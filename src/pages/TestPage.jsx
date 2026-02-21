import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { getSubjects } from '../services/api';
import { getSubjectTheme } from '../constants/subjectThemes';

const TestPage = () => {
  // Extract subjectID from the URL
  const { subjectID } = useParams();
  const navigate = useNavigate();
  // State to store subjects
  const [subjects, setSubjects] = useState([]);
  // State to check status of loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await getSubjects();
      setSubjects(data);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) return <div className="p-10 text-center font-bold">Loading exams...</div>;

  return (
    <div className="min-h-screen bg-white font-sans pb-24">

      {/* Header */}
      <Header label="Mock Exams" />

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {subjects.map((subject) => {
          if (!subject.exams || subject.exams.length === 0) return null;
          // Get the theme based on the URL ID
          const theme = getSubjectTheme(subject.subjectID);
          return (
            <section key={subject._id}>
              <h2 className="text-xl font-bold mb-4">GL Assessment {subject.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {subject.exams.map((exam) => (
                  <button
                    onClick={() => navigate(`/test/${subjectID}/${exam.id}`)}
                    style={{
                      backgroundColor: theme.secondary,
                      borderColor: theme.primary,
                      color: theme.primary,
                      boxShadow: theme.shadow
                    }}
                    className="border-2 flex items-center justify-center gap-2 shadow-sm transition-all duration-200 p-10! font-bold rounded-lg w-full shadow-medium hover:-translate-y-px active:scale-95"
                  >
                    {exam.name}
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </div>
      {/* --- BOTTOM NAVIGATION --- */}
      <BottomNav activePage="test" />
    </div>
  );
};


export default TestPage;