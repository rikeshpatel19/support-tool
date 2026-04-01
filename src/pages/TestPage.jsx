import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { getSubjects } from '../services/api';
import { getSubjectTheme } from '../constants/subjectThemes';

const TestPage = () => {
  const navigate = useNavigate();
  // State to store subjects
  const [subjects, setSubjects] = useState([]);
  // State to check status of loading
  const [loading, setLoading] = useState(true);
  // State for the error message
  const [errorMessage, setErrorMessage] = useState("");
  
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const subjectResponse = await getSubjects();
      const subjectData = subjectResponse.data;

      if (subjectResponse.error) {
        setErrorMessage(subjectResponse.error);
        return;
      }
      setSubjects(subjectData);
      setLoading(false);
    };
    loadData();
  }, []);

  if (errorMessage) {
    return (
      <div className="p-10 text-center">
        <div className="bg-red-100 border border-red-500 text-red-600 px-4 py-3 rounded mb-4">
          <p><span className="font-bold">Error: </span>{errorMessage}</p>
        </div>
        <span className="text-black underline cursor-pointer hover:text-blue-600" onClick={() => navigate("/sd")}>Return to Student Dashboard</span>
      </div>
    );
  }

  if (loading || !subjects) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl">Loading exams...</h2>
        <p className="text-gray-500">Please be patient while the exams load.</p>
        <span className="text-black underline cursor-pointer hover:text-blue-600" onClick={() => navigate("/sd")}>Return to Student Dashboard</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-24">
      {/* Header */}
      <Header label="Mock Exams" />
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {subjects.map((subject) => {
          if (!subject.exams || subject.exams.length === 0) return null;
          // Get the theme based on the subject ID
          const theme = getSubjectTheme(subject.subjectID);
          return (
            <section key={subject._id}>
              <h2 className="text-xl text-gray-800 font-bold mb-4">GL Assessment {subject.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {subject.exams.map((exam) => (
                  <button
                    key={exam.id}
                    onClick={() => navigate(`/test/${subject.subjectID}/${exam.id}`)}
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
      {/* Bottom Navigation */}
      <BottomNav activePage="test" />
    </div>
  );
};


export default TestPage;