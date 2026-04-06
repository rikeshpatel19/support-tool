import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Avatar from '../components/Avatar';
import PassageModal from '../components/PassageModal';
import PauseMenu from '../components/PauseMenu';
import QuizCompletionOverlay from '../components/QuizCompletionOverlay';
import QuizHeader from '../components/QuizHeader';
import QuizFooter from '../components/QuizFooter';
import { getUser, getQuiz, getDynamicQuestions, getQuestionsByIDs, getSubjectByID, getQuizProgress, saveQuizProgress } from '../services/api';
import { getSubjectTheme } from '../constants/subjectThemes';

const QuizPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // State for the error message
  const [errorMessage, setErrorMessage] = useState("");
  // State for the caution message
  const [cautionMessage, setCautionMessage] = useState("");
  // Extract subjectID and quizID from the URL
  const { subjectID, quizID } = useParams();
  // Get the theme based on the URL ID
  const theme = getSubjectTheme(subjectID);
  // Dictionary to map theme colours to CSS variables
  const themeStyle = {
    '--primary': theme.primary,
    '--secondary': theme.secondary,
    '--hover': theme.hover
  };

  // State to store current subject
  const [currentSubject, setCurrentSubject] = useState(null);
  // State to store the quiz type
  const [quizType, setQuizType] = useState("");
  // State to show current topic
  const [displayTopic, setDisplayTopic] = useState("");
  // State to store the array of questions fetched from the Backend
  const [questions, setQuestions] = useState([]);
  // State to store total number of questions
  const [totalQuestions, setTotalQuestions] = useState();
  // State to check status of loading
  const [loading, setLoading] = useState(true);
  // State to track which question is currently being displayed (Default 0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // State to store all answers, not just the current one
  const [userAnswers, setUserAnswers] = useState({});
  // State to track if the quiz has ended
  const [isFinished, setIsFinished] = useState(false);
  // State to track if the Pause Menu is open
  const [isPaused, setIsPaused] = useState(false);
  // State to check if the quiz is being submitted 
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State to track which "page" of question numbers is currently visible in the navigation bar
  const [questionPage, setQuestionPage] = useState(0);
  // State to store the questions per page
  const [perPage, setPerPage] = useState(0);
  // State to store passage text if it exists
  const [passage, setPassage] = useState(null);
  // Determines if the text passage is open or not
  const [isPassageOpen, setIsPassageOpen] = useState(true);

  // State to store question IDs for dynamic quizzes if the user has existing progress
  const [dynamicQuestionIDs, setDynamicQuestionIDs] = useState([]);
  // State to store current difficulty of questions for dynamic quizzes
  const [currentDifficulty, setCurrentDifficulty] = useState(1);
  // State to track correct answers in the current batch of 5 for dynamic quizzes
  const [batchScore, setBatchScore] = useState(0);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const storedID = localStorage.getItem("userID");
      const [userResponse, subjectResponse, quizResponse] = await Promise.all([
        getUser(storedID),
        getSubjectByID(subjectID),
        getQuiz(quizID)
      ]);

      const userData = userResponse.data;
      const subjectData = subjectResponse.data;
      const quizData = quizResponse.data;

      if (userResponse.error || subjectResponse.error || quizResponse.error) {
        setErrorMessage(userResponse.error || subjectResponse.error || quizResponse.error);
        return;
      }

      if (userData && subjectData) {
        setUser(userData);
        setCurrentSubject(subjectData);
      }

      // 10 Questions shown for Static, 5 Questions shown for Dynamic
      const perPage = quizData.type === 'dynamic' ? 5 : 10;
      setPerPage(perPage);
      const validQuiz = quizData && !quizData.message;

      if (validQuiz) {
        setDisplayTopic(quizData.name); // This sets the name
        if (quizData.passage) {
          setPassage(quizData.passage);
        }
        setTotalQuestions(quizData.totalQuestions);
        setQuizType(quizData.type); // Static or Dynamic

        const progressResponse = await getQuizProgress(storedID, quizID);
        const savedProgress = progressResponse.data;
        if (progressResponse.error) {
          setErrorMessage(progressResponse.error);
          return;
        }
        const validProgress = savedProgress && !savedProgress.message;

        // If the student has saved progress, restore their spot
        if (validProgress) {
          console.log("Progress Found");
          const restoredIndex = savedProgress.currentQuestionIndex || 0;
          setUserAnswers(savedProgress.userAnswers || {});
          setCurrentQuestionIndex(restoredIndex);
          console.log("Restored Index:", restoredIndex);
          // Move the pagination strip to the correct page
          setQuestionPage(Math.floor(restoredIndex / perPage));
        } else {
          console.log(savedProgress.message);
        }

        if (quizData.type === 'static') {
          console.log("Static Quiz");
          setQuestions(quizData.fixedQuestions);
        } else if (quizData.type === 'dynamic') {
          console.log("Dynamic Quiz");
          if (validProgress && (savedProgress.dynamicQuestionIDs).length > 0) {
            // Ensures the student is presented with the same questions as before for dynamic quizzes
            const questionsResponse = await getQuestionsByIDs(savedProgress.dynamicQuestionIDs);
            const existingQuestions = questionsResponse.data;
            if (questionsResponse.error) {
              setErrorMessage(questionsResponse.error);
              return;
            }
            console.log("Fetched Existing Questions:", existingQuestions);
            setQuestions(existingQuestions);
            setBatchScore(savedProgress.batchScore);
            console.log("Previous Batch Score:", savedProgress.batchScore);
            setDynamicQuestionIDs(savedProgress.dynamicQuestionIDs);
            // Carries on at correct difficulty
            setCurrentDifficulty(savedProgress.currentDifficulty || 3);
          } else {
            // Start of with Normal questions if it is there first time
            let difficulty = 3;
            if (userData.completedQuizzes) {
              // Finds the specific object with the same quizID in completedQuizzes
              const pastAttempt = userData.completedQuizzes.find(q => q.quizID === quizID);
              if (pastAttempt && pastAttempt.lastDifficulty) {
                // Resume using difficulty calculated in the previous attempt 
                difficulty = pastAttempt.lastDifficulty;
                console.log("Resuming at saved difficulty:", difficulty);
              }
            }
            const dynamicResponse = await getDynamicQuestions(quizID, subjectID, difficulty);
            const initialQuestions = dynamicResponse.data;
            if (dynamicResponse.error) {
              setErrorMessage(dynamicResponse.error);
              return;
            }
            console.log("Fetched Initial Questions:", initialQuestions);
            setQuestions(initialQuestions);
            // Stores the question IDs for the inital 5 questions
            setDynamicQuestionIDs(initialQuestions.map(q => q._id));
            setCurrentDifficulty(difficulty);
          }
        }
      }
      setLoading(false);
    };
    load();
  }, [subjectID, quizID]);

  if (errorMessage) {
    return (
      <div className="p-10 text-center">
        <div className="bg-red-100 border border-red-500 text-red-600 px-4 py-3 rounded mb-4">
          <p><span className="font-bold">Error: </span>{errorMessage}</p>
        </div>
        <span className="text-black underline cursor-pointer hover:text-blue-600" onClick={() => navigate(`/subject/${subjectID}`)}>Return to Subject Page</span>
      </div>
    );
  }

  if (loading || questions.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl">Waiting for quiz data...</h2>
        <p className="text-gray-500">Please be patient while the quiz loads.</p>
        <span className="text-black underline cursor-pointer hover:text-blue-600" onClick={() => navigate(-1)}>Return to Subject Page</span>
      </div>
    );
  }

  // Get the current question object based on the index
  const question = questions[currentQuestionIndex];
  // Check if the user has already answered the current question
  const selectedOption = userAnswers[currentQuestionIndex];

  // Calculate score dynamically based on all answers
  const currentScore = questions.reduce((totalScore, currentQuestion, qIndex) => {
    return totalScore + (userAnswers[qIndex] === currentQuestion.correct_option ? 1 : 0);
  }, 0);

  // Derive points from score
  const questionPoints = 50;
  const currentPoints = currentScore * questionPoints;
  // Calculate the percentage for the progress bar width
  const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // Handle when a user clicks an answer option (A, B, C, D, E)
  const handleOptionClick = (option) => {
    // Clear previous messages
    setErrorMessage("");
    setCautionMessage("");
    // Prevent changing answer if already selected for this specific question
    if (userAnswers[currentQuestionIndex]) return;
    // Increment batchScore if correct (only for dynamic quizzes)
    if (quizType === 'dynamic' && option === question.correct_option) {
      setBatchScore(prev => prev + 1);
    }
    // Adds the answer to the users answers in the format: { 0: "Answer A", 1: "Answer B" }
    setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: option }));
  };

  // Open the pause menu
  const handlePause = () => {
    setIsPaused(true);
  };

  // Close the pause menu
  const handleResume = () => {
    setIsPaused(false);
  };

  // How far the user has gotten in the quiz in the form of a percentage based on questions answered
  const progress = ((Object.keys(userAnswers).length) / totalQuestions) * 100;

  // "Save progress" and navigate back to the previous page
  const handleSaveAndExit = async () => {
    const storedID = localStorage.getItem("userID");
    // Checks if any questions have actually been answered
    const answeredCount = Object.keys(userAnswers).length;

    if (answeredCount === 0) {
      console.log("No answers to save yet.");
      navigate(`/subject/${subjectID}`);
      return;
    }

    const progressData = {
      subjectID,
      score: currentScore,
      questionsAnswered: Object.keys(userAnswers).length,
      progressPercent: progress,
      userAnswers,
      currentQuestionIndex
    };

    if (quizType === 'dynamic') {
      progressData.batchScore = batchScore;
      progressData.dynamicQuestionIDs = dynamicQuestionIDs;
      progressData.currentDifficulty = currentDifficulty;
    }

    console.log(progressData);
    const saveResponse = await saveQuizProgress(storedID, quizID, progressData);
    if (saveResponse.error) {
      setErrorMessage(saveResponse.error);
    }
    navigate(`/subject/${subjectID}`);
  };

  // Determine the background colour of the answer button (Green/Red/Default)
  const getOptionStyle = (option) => {
    // If THIS option is selected
    if (selectedOption === option) {
      // Check if it's correct
      if (option === question.correct_option) {
        return "!bg-green-500";
      } else {
        return "!bg-red-500";
      }
    }
    return ""; // Default style
  };

  // Determine the text colour of the answer button
  const getTextStyle = (option) => {
    // If THIS option is selected
    if (selectedOption === option) {
      return "!text-white";
    }
    return "text-black";
  };

  // Helper for the square label (A, B, C, D, E)
  const getLabelStyle = (option) => {
    // Only apply changes if THIS option was clicked
    if (selectedOption === option) {
      if (option === question.correct_option) {
        // Green Button --> White Box with Green Text
        return "!bg-white !border-white !text-green-500";
      } else {
        // Red Button --> White Box with Red Text
        return "!bg-white !border-white !text-red-500";
      }
    }
    return ""; // Otherwise keep default (Grey box, Black text)
  };

  return (
    <div className="min-h-screen font-sans flex flex-col" style={{ backgroundColor: theme.secondary }}>
      {/* Pause Menu Overlay */}
      <PauseMenu
        isPaused={isPaused}
        handleResume={handleResume}
        handleSaveAndExit={handleSaveAndExit}
      />

      {/* Quiz Completion Overlay */}
      <QuizCompletionOverlay
        isFinished={isFinished}
        totalQuestions={totalQuestions}
        currentScore={currentScore}
        currentPoints={currentPoints}
        subjectID={subjectID}
      />

      {/* Quiz Header */}
      <QuizHeader
        handlePause={handlePause}
        theme={theme}
        currentSubject={currentSubject}
        displayTopic={displayTopic}
        progressPercent={progressPercent}
        passage={passage}
        setIsPassageOpen={setIsPassageOpen}
        currentPoints={currentPoints}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-6 flex flex-col gap-6" style={themeStyle}>
        {/* The Big Question Card */}
        <div className="bg-white border-2 border-black rounded-3xl p-8 min-h-75 relative flex flex-col justify-between">
          <div className="flex justify-between items-start">
            {/* Question Text */}
            <h2 className="text-2xl md:text-3xl leading-tight max-w-2xl">
              <span className="font-bold text-4xl mr-3" style={{ color: theme.primary }}>{currentQuestionIndex + 1}</span>
              {question.question_text}
            </h2>

            {/* Mascot / Feedback Area */}
            <div className="hidden md:flex flex-col items-center">
              {/* Cat Placeholder */}
              {/* I want to change this for an expression later if possible */}
              {selectedOption ? (
                selectedOption === question.correct_option ?
                  <Avatar avatarName={user.avatar} className='fill-green-400' size={60} strokeWidth={1.5} /> :
                  <Avatar avatarName={user.avatar} className='fill-red-400' size={60} strokeWidth={1.5} />
              ) : (
                <Avatar avatarName={user.avatar} className='fill-amber-400' size={60} strokeWidth={1.5} />
              )}
              {selectedOption ? (
                selectedOption === question.correct_option ?
                  <span className="font-bold text-green-600">Well done!</span> :
                  <span className="font-bold text-red-600">Not quite!</span>
              ) : (
                <span className="font-bold text-gray-400">Thinking...</span>
              )}
            </div>
          </div>

          {/* Conditional Image Area */}
          {question.question_image && (
            <div className="w-full flex justify-center mt-2">
              <div className="p-2 w-fit h-auto">
                <img
                  src={question.question_image}
                  alt="Question diagram"
                  className="w-fit h-auto mx-auto"
                />
              </div>
            </div>
          )}
        </div>

        {/* Display Caution Message */}
        {cautionMessage && (
          <p className="text-purple-400 font-bold text-sm text-center bg-purple-50 p-2 rounded-lg border border-purple-300">
            {cautionMessage}
          </p>
        )}

        {/* Options Row */}
        <div className="flex flex-wrap justify-center gap-4">
          {question.options.map((option, index) => {
            // Converts index to letters (65 + 0 = A, 65 + 1 = B, etc)
            const label = String.fromCharCode(65 + index);

            return (
              <Button
                key={index}
                onClick={() => handleOptionClick(option)}
                disabled={!!selectedOption} // Disable after clicking once
                variant="option_txt"
                className={getOptionStyle(option)}>
                {/* The A/B/C/D/E Label Square */}
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg border-2 border-(--primary) bg-(--secondary) font-bold text-(--primary) ${getLabelStyle(option)}`}>{label}</span>
                {/* The Option Text */}
                <span className={`font-bold text-lg ${getTextStyle(option)}`}>{option}</span>
              </Button>
            );
          })}
        </div>
        {/* Explanation Text (Only shows after answering) */}
        {selectedOption && (
          <div className={`mt-4 p-4 bg-gray-50 ${selectedOption === question.correct_option ? 'border-l-8 border-l-green-500' : 'border-l-8 border-l-red-500'}`}>
            <h3 className="font-bold text-lg">Answer:</h3>
            <p className="text-gray-700">{question.explanation
              ? question.explanation
              : `The correct answer is ${question.correct_option}.`}</p>
          </div>
        )}
      </main>

      {/* Quiz Footer */}
      <QuizFooter
        quizID={quizID}
        currentPoints={currentPoints}
        currentScore={currentScore}
        themeStyle={themeStyle}
        currentQuestionIndex={currentQuestionIndex}
        questions={questions}
        totalQuestions={totalQuestions}
        userAnswers={userAnswers}
        quizType={quizType}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        questionPage={questionPage}
        setQuestionPage={setQuestionPage}
        perPage={perPage}
        setIsFinished={setIsFinished}
        setQuestions={setQuestions}
        setDynamicQuestionIDs={setDynamicQuestionIDs}
        batchScore={batchScore}
        currentDifficulty={currentDifficulty}
        subjectID={subjectID}
        setCurrentDifficulty={setCurrentDifficulty}
        setBatchScore={setBatchScore}
        setErrorMessage={setErrorMessage}
        setCautionMessage={setCautionMessage}
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
      />

      {/* Only renders the component if the passage object exists and is open */}
      {isPassageOpen && passage && (
        <PassageModal
          isOpen={isPassageOpen}
          onClose={() => setIsPassageOpen(false)}
          title={passage.title}
          author={passage.author}
          synopsis={passage.synopsis}
          text={passage.text}
        />
      )}
    </div>
  );
};

export default QuizPage;