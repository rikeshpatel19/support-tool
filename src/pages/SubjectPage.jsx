import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopicCard from '../components/TopicCard';
import { getUser, getSubjectById, getSubjectProgress } from '../services/api';
import Header from '../components/Header';
import { getSubjectTheme } from '../constants/subjectThemes';

const SubjectPage = () => {
  const { subjectID } = useParams(); // Reads from the URL
  const navigate = useNavigate();

  const [currentSubject, setCurrentSubject] = useState(null);
  const [user, setUser] = useState(null);
  const [topicProgressMap, setTopicProgressMap] = useState({}); // Store as { topicID: percentage }
  const [loading, setLoading] = useState(true);
  // Get the theme based on the URL ID
  const theme = getSubjectTheme(subjectID);

  useEffect(() => {
    // Used to deal with React Strict Mode's double invoke
    let ignore = false;
    const loadAllData = async () => {
      setLoading(true);
      try {
        // Retrieves the user ID from local storage
        const storedID = localStorage.getItem("userID");
        const [subjectData, userData, progressData] = await Promise.all([
          getSubjectById(subjectID),
          getUser(storedID),
          getSubjectProgress(storedID, subjectID) // Fetches progress records belonging to a specific subject
        ]);
        if (!ignore) {
          setCurrentSubject(subjectData);
          setUser(userData);
          // Combines topics and challenges into a single list
          const allQuizzes = [...subjectData.topics, ...subjectData.challenges];
          // Converts the progressData into a Map in the following format { topicID: progressObject }
          const progressLookup = {};
          progressData.forEach(p => {
            progressLookup[p.topicID] = p;
          });
          // Used to map all topics/challenges to their current percentage 
          const progressMap = {};
          allQuizzes.forEach(quiz => {
            // Check if a progress record exists for this quiz
            const data = progressLookup[quiz.id];
            if (data) {
              // Use the saved percentage from the database
              progressMap[quiz.id] = data.progressPercent;
            } else {
              // Default to 0% (user has no progress)
              progressMap[quiz.id] = 0;
            }
          });
          // Updates the state with the mapped progress values
          setTopicProgressMap(progressMap);
        }
      } catch (error) {
        if (!ignore) console.error("Error loading Subject Page:", error);
      }
      if (!ignore) setLoading(false);
    };
    loadAllData();

    return () => {
      ignore = true;
    };
  }, [subjectID]);

  const getBadgeStatus = (topicID) => {
    // If the user does not exist or does not have an array completedQuizzes
    if (!user || !user.completedQuizzes) return 'none';
    // Find the specific object for this topic
    const record = user.completedQuizzes.find(q => q.topicID === topicID);
    // If the topic has never been attempted
    if (!record) return 'none';
    // Best percentage that was stored in the object 
    const percentage = record.bestPercentage;
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
                status={getBadgeStatus(topic.id)}
                theme={theme}
                progress={topicProgressMap[topic.id] || 0}
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
                status={getBadgeStatus(challenge.id)}
                theme={theme}
                progress={topicProgressMap[challenge.id] || 0}
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