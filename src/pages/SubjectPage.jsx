import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopicCard from '../components/TopicCard';
import { getSubjectById } from '../services/api';
import Header from '../components/Header';

const SubjectPage = () => {
  const { subjectId } = useParams(); // Reads from the URL
  const navigate = useNavigate();

  const [currentSubject, setCurrentSubject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true); // Start loading
      const data = await getSubjectById(subjectId); // Call the API
      setCurrentSubject(data);
      setLoading(false); // Stop loading
    };

    loadData();
  }, [subjectId]);

  if (loading) {
    return <div className="p-10 text-center font-bold">Loading subject...</div>;
  }

  if (!currentSubject) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Subject Not Found</h2>
        <button onClick={() => navigate('/')} className="text-blue-500 underline mt-4">Go Home</button>
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
                status={topic.status}
                onClick={() => navigate(`/quiz/${subjectId}/${topic.name}`)}
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
                status={challenge.status}
                onClick={() => navigate(`/quiz/${challenge.name}`)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};


export default SubjectPage;