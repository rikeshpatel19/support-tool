import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopicCard from '../components/TopicCard';
import { getUser, getSubjectById } from '../services/api';
import Header from '../components/Header';

const SubjectPage = () => {
  const { subjectID } = useParams(); // Reads from the URL
  const navigate = useNavigate();

  const [currentSubject, setCurrentSubject] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const storedID = localStorage.getItem("userID");
      const [subjectData, userData] = await Promise.all([
        getSubjectById(subjectID),
        getUser(storedID)
      ]);
      setCurrentSubject(subjectData);
      setUser(userData);
      setLoading(false); // Stop loading
    };

    loadData();
  }, [subjectID]);

  const getBadgeStatus = (user, topicID) => {
    if (!user || !user.completedQuizzes) return 'none';
    // Find all attempts for this specific topic/challenge
    const attempts = user.completedQuizzes.filter(quiz => quiz.topicID === topicID);
    if (attempts.length === 0) return 'none';
    // Get the percentage of their best attempt
    const percentage = Math.max(...attempts.map(attempt => attempt.percentage));
    // Boundaries that determine what tier Badge is earnt
    if (percentage >= 70) return 'gold';
    if (percentage >= 50) return 'silver';
    if (percentage >= 40) return 'bronze';

    return 'none';
  };

  if (loading) {
    return <div className="p-10 text-center font-bold">Loading subject...</div>;
  }

  if (!currentSubject) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Subject Not Found</h2>
        <button onClick={() => navigate('/sd')} className="text-blue-500 underline mt-4">Go Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans pb-24">

      {/* Header */}
      <Header label={currentSubject.title} />

      <div className="max-w-4xl mx-auto p-6 space-y-8">

        {/* Section 1: Choose a Topic */}
        <section>
          <h2 className="text-xl font-bold mb-4">Choose a Topic</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentSubject.topics.map((topic) => (
              <TopicCard
                key={topic.id}
                name={topic.name}
                status={getBadgeStatus(user, topic.id)}
                onClick={() => navigate(`/quiz/${subjectID}/${topic.id}`)}
              />
            ))}
          </div>
        </section>

        {/* Section 2: Challenges */}
        <section>
          <h2 className="text-xl font-bold mb-4">Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentSubject.challenges.map((challenge) => (
              <TopicCard
                key={challenge.id}
                name={challenge.name}
                status={getBadgeStatus(user, challenge.id)}
                onClick={() => navigate(`/quiz/${subjectID}/${challenge.id}`)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};


export default SubjectPage;