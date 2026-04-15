import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopicCard from '../components/TopicCard';
import { getUser, getSubjectByID, getSubjectProgress } from '../services/api';
import Header from '../components/Header';
import { getSubjectTheme } from '../constants/subjectThemes';

const SubjectPage = () => {
  const { subjectID } = useParams(); // Reads from the URL
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [currentSubject, setCurrentSubject] = useState(null);
  const [topicProgressMap, setTopicProgressMap] = useState({}); // Store as { quizID: percentage }
  // State to check status of loading
  const [loading, setLoading] = useState(true);
  // State for the error message
  const [errorMessage, setErrorMessage] = useState("");
  // Get the theme based on the URL ID
  const theme = getSubjectTheme(subjectID);

  useEffect(() => {
    const loadAllData = async () => {
      setLoading(true);
      // Retrieves the user ID from local storage
      const storedID = localStorage.getItem("userID");
      const [userResponse, subjectResponse, progressResponse] = await Promise.all([
        getUser(storedID),
        getSubjectByID(subjectID),
        getSubjectProgress(storedID, subjectID) // Fetches progress records belonging to a specific subject
      ]);

      const userData = userResponse.data;;
      const subjectData = subjectResponse.data;
      const progressData = progressResponse.data;

      if (userResponse.error || subjectResponse.error || progressResponse.error) {
        setErrorMessage(userResponse.error || subjectResponse.error || progressResponse.error);
        return;
      }
      setUser(userData);
      setCurrentSubject(subjectData);
      // Combines topics and challenges into a single list
      const allQuizzes = [...subjectData.topics, ...subjectData.challenges];
      // Converts the progressData into a Map in the following format { quizID: progressObject }
      const progressLookup = {};
      // console.log(progressData);
      progressData.forEach(p => {
        progressLookup[p.quizID] = p;
      });
      // console.log(progressLookup);
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
      // console.log(progressMap);
      // Updates the state with the mapped progress values
      setTopicProgressMap(progressMap);
      setLoading(false);
    };
    loadAllData();
  }, [subjectID]);

  const getBadgeStatus = (quizID) => {
    // If the user does not exist or does not have an array completedQuizzes
    if (!user || !user.completedQuizzes) return 'none';
    // Find the specific object for this topic
    const record = user.completedQuizzes.find(q => q.quizID === quizID);
    // If the topic has never been attempted
    if (!record) return 'none';
    // Best percentage that was stored in the object 
    const percentage = record.bestPercentage;
    // Boundaries that determine what tier Badge is earnt
    // 80% or higher: Gold
    if (percentage >= 80) return 'gold';
    // 70% or higher: Silver
    if (percentage >= 70) return 'silver';
    // 60% or higher: Bronze
    if (percentage >= 60) return 'bronze';
    // 59% or lower: None
    return 'none';
  };

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

  // If user data or collectibles have not loaded yet, display a simple loading message
  if (loading || !currentSubject) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl">Loading Subject...</h2>
        <p className="text-gray-500">Please be patient while the subject loads.</p>
        <span className="text-black underline cursor-pointer hover:text-blue-600" onClick={() => navigate("/sd")}>Return to Student Dashboard</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-24">
      {/* Header */}
      <Header label={currentSubject.title} />
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Section 1: Choose a Topic */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Choose a Topic</h2>
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
          <h2 className="text-xl font-bold text-gray-800 mb-4">Challenges</h2>
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