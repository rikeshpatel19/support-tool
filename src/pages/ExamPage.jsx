import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import ExamResults from '../components/ExamResults';
import { getExam, markExam, finaliseQuizResults } from '../services/api';

const ExamPage = () => {
  const navigate = useNavigate();
  // Extract subjectID and examID from the URL
  const { subjectID, examID } = useParams();
  // State for the error message
  const [errorMessage, setErrorMessage] = useState("");

  // State to store the title of the exam
  const [examTitle, setExamTitle] = useState("");
  // State to store the time limit in seconds (3000 seconds --> 50 minutes)
  const [timeLimit, setTimeLimit] = useState(3000);
  // State to store the time remaining in seconds (3000 seconds --> 50 minutes)
  const [timeLeft, setTimeLeft] = useState(3000);
  // State to store the array of questions fetched from the API
  const [questions, setQuestions] = useState([]);
  // State to check status of loading
  const [loading, setLoading] = useState(true);
  // State to track which question is currently being displayed (Default 0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // State to store all answers, not just the current one
  const [userAnswers, setUserAnswers] = useState({});
  // State to track if the quiz has ended
  const [isFinished, setIsFinished] = useState(false);
  // State to track which "page" of question numbers is currently visible in the navigation bar
  const [questionPage, setQuestionPage] = useState(0);
  // Fixed limit of 10 question numbers to display at one time
  const questionsPerPage = 10;
  // State to store the final results calculated on the server-side + answers
  const [serverResults, setServerResults] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const examResponse = await getExam(examID); // Fetch exam
      const examData = examResponse.data;
      if (examResponse.error) {
        setErrorMessage(examResponse.error);
        setLoading(false);
        return;
      }
      if (examData && examData.questions) {
        setExamTitle(examData.title);
        setQuestions(examData.questions);
        setTimeLimit(examData.timeLimit);
        setTimeLeft(examData.timeLimit);
        setLoading(false);
      }
    };
    loadData();
  }, [examID]);

  // Timer Logic
  useEffect(() => {
    // Stop the timer if the exam is finished
    if (isFinished) return;
    // If the user has run out of time but never clicked "Finish" 
    if (!isFinished && timeLeft === 0) {
      // Auto submits the results
      handleAutoSubmit();
    }
    const timer = setInterval(() => {
      // Adjusts time left by decrementing the previous value every second
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    // Stops the timer 
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Formats time to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    // padStart ensures both the minutes and seconds always have 2 digits
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (errorMessage) {
    return (
      <div className="p-10 text-center">
        <div className="bg-red-100 border border-red-500 text-red-600 px-4 py-3 rounded mb-4">
          <p><span className="font-bold">Error: </span>{errorMessage}</p>
        </div>
        <span className="text-black underline cursor-pointer hover:text-blue-600" onClick={() => navigate(-1)}>Return to Exam Page</span>
      </div>
    );
  }

  if (loading || questions.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl">Waiting for exam data...</h2>
        <p className="text-gray-500">Please be patient while the exam loads.</p>
        <span className="text-black underline cursor-pointer hover:text-blue-600" onClick={() => navigate(-1)}>Return to Exam Page</span>
      </div>
    );
  }

  // Determines the starting index of the current "page" of question numbers
  const startIndex = questionPage * questionsPerPage;
  // Placeholder array (filled with "undefined" rather than empty spaces) used to map the correct number of buttons for the current page
  const visibleQuestions = Array.from({ length: questionsPerPage });
  // Calculates the total number of pages needed by dividing total questions by the limit and rounding up
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  // Get the current question object based on the index
  const question = questions[currentQuestionIndex];
  // Check if the user has already answered the current question
  const selectedOption = userAnswers[currentQuestionIndex];
  // Calculate the percentage for the progress bar width
  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Handle when a user clicks the exit button
  const handleQuitRequest = () => {
    if (window.confirm("Are you sure? The timer will NOT stop, and your progress will be lost.")) {
      navigate(-1);
    }
  };

  // Handle when a user clicks an answer option (A, B, C, D, E)
  const handleOptionClick = (option) => {
    // Adds the answer to the users answers in the format: { 0: "Answer A", 1: "Answer B" }
    setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: option }));
  };

  // Handle when the timer hits 00:00
  const handleAutoSubmit = async () => {
    const storedID = localStorage.getItem("userID");
    if (storedID) {
      const questionsAnswered = Object.keys(userAnswers).length;
      console.log("Questions Answered: ", questionsAnswered);
      const markingData = { examID, userAnswers }
      const markingResponse = await markExam(markingData);

      if (markingResponse.error) {
        setErrorMessage("Failed to mark exam");
        return;
      } else {
        setServerResults(markingResponse.data);
      }
      const finaliseResponse = await finaliseQuizResults(storedID, subjectID, examID, {
        score: markingResponse.data.score,
        questionsAnswered: questionsAnswered,
        totalQuestions: questions.length,
        percentage: markingResponse.data.percentage,
      });

      if (finaliseResponse.error) {
        setErrorMessage(finaliseResponse.error);
        return;
      }

      console.log("Exam result saved!");
      setIsFinished(true);
    }
  };

  // Handle clicking the "Next" button
  const handleNext = async () => {
    const nextIndex = currentQuestionIndex + 1;
    const quizEnd = nextIndex >= questions.length;

    if (quizEnd) {
      handleAutoSubmit();
      setIsFinished(true);
    } else {
      setCurrentQuestionIndex(nextIndex);
      // Calculate which page the next index belongs to (Index 0-9 = Page 0, Index 10-19 = Page 1, etc)
      const nextPage = Math.floor(nextIndex / 10);
      // If the next question is on a new page, slide the nav bar forward
      if (nextPage !== questionPage) {
        setQuestionPage(nextPage);
      }
    }
  };

  // Handle clicking the "Previous" button
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
      // Calculate which page the previous index belongs to
      const prevPage = Math.floor(prevIndex / 10);
      // If we have moved back to the previous set of 10, update the nav bar
      if (prevPage !== questionPage) {
        setQuestionPage(prevPage);
      }
    }
  };

  // Handle clicking a specific number in the bottom nav bar
  const handleJumpToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  // Determine the colour of the timer
  const getTimerStyle = (seconds) => {
    // 5 minutes or less: Red
    if (seconds <= 300) return 'bg-red-50 text-red-500 !border-red-500';
    // 10 minutes or less: Amber
    if (seconds <= 600) return 'bg-amber-50 text-amber-500 !border-amber-500';
    return ""; // Default style
  };

  // Determine the background colour of the answer button (Purple/Default)
  const getOptionStyle = (option) => {
    // If THIS option is selected
    if (selectedOption === option) {
      return "!bg-purple-400"
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
      return "!bg-white !border-white !text-purple-400";
    }
    return ""; // Otherwise keep default (Grey box, Black text)
  };

  if (isFinished) {
    return (
      <ExamResults
        questions={questions}
        userAnswers={userAnswers}
        timeTaken={formatTime(timeLimit - timeLeft)}
        serverScore={serverResults.score}
        serverPercentage={serverResults.percentage}
        answers={serverResults.answers}
      />
    );
  }

  return (
    <div className="min-h-screen bg-purple-100 font-sans flex flex-col">
      {/* Header */}
      <header className="border-b-2 border-black p-4 flex items-center justify-between bg-white sticky top-0 z-10">
        {/* Left: Exit & Display Exam Title */}
        <div className="flex items-center gap-4">
          <button onClick={handleQuitRequest} className="hover:opacity-70 hover:text-red-500 transition-colors">
            <LogOut size={32} />
          </button>
          <span className="font-bold text-xl capitalize">{examTitle}</span>
        </div>
        {/* Centre: Progress Bar */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1/3 h-4 bg-gray-200 rounded-full border-2 border-black overflow-hidden">
          {/* The inner filling bar that changes width based on progressPercent */}
          <div className="h-full bg-purple-400 transition-all duration-300" style={{ width: `${progressPercent}%` }} />
        </div>
        {/* Right: Timer */}
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-black ${getTimerStyle(timeLeft)}`}>
          <Clock size={24} />
          <span className="font-bold text-2xl">{formatTime(timeLeft)}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-6 flex flex-col gap-6">
        {/* The Big Question Card */}
        <div className="bg-white border-2 border-black rounded-3xl p-8 min-h-75 relative flex flex-col justify-between">
          <div className="flex justify-between items-start">
            {/* Question Text */}
            <h2 className="text-2xl md:text-3xl leading-tight max-w-2xl">
              <span className="text-purple-400 font-bold text-4xl mr-3">{currentQuestionIndex + 1}</span>
              {question.question_text}
            </h2>
          </div>

          {/* Conditional Image Area */}
          {question.question_image && (
            <div className="w-full flex justify-center mt-2">
              <div className="p-2 max-w-70 md:max-w-xs">
                <img
                  src={question.question_image}
                  alt="Question diagram"
                  className="w-full h-auto object-contain block mx-auto"
                />
              </div>
            </div>
          )}
        </div>

        {/* Options Row */}
        <div className="flex flex-wrap justify-center gap-4">
          {question.options.map((option, index) => {
            // Converts index to letters (65 + 0 = A, 65 + 1 = B, etc)
            const label = String.fromCharCode(65 + index);

            return (
              <Button
                key={index}
                onClick={() => handleOptionClick(option)}
                variant="option_txt"
                className={getOptionStyle(option)}>
                {/* The A/B/C/D/E Label Square */}
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg border-2 border-purple-400 bg-purple-100 font-bold text-purple-400 ${getLabelStyle(option)}`}>{label}</span>
                {/* The Option Text */}
                <span className={`font-bold text-lg ${getTextStyle(option)}`}>{option}</span>
              </Button>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 border-t-2 border-black flex justify-between items-center bg-white sticky bottom-0 z-10">
        {/* Left: Previous Button */}
        <Button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          variant="purple"
          className={`${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-500'}`}
        >
          Previous
        </Button>
        {/* Centre: Number Strip + Text */}
        <div className="flex flex-col items-center gap-2">
          {/* Interactive Number Strip with pagination */}
          <div className="hidden md:flex items-center gap-3">
            {/* Left Arrow: Moves to the previous page */}
            <button
              // Decrease "page" by 1 using Math.max to ensure it never goes below 0
              onClick={() => setQuestionPage(Math.max(0, questionPage - 1))}
              // Disable the button if the user is already on the first page
              disabled={questionPage === 0}
              className={`p-1 rounded-full border-2 border-black transition-colors ${questionPage === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-purple-300'}`}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {/* Loop through placeholders, index used to calculate question numbers in the strip */}
              {visibleQuestions.map((_, idx) => {
                // Calculate the actual index (First Button on Page 2 is Question 11, this would have the Index 10)
                const actualIndex = startIndex + idx;
                const isCurrent = actualIndex === currentQuestionIndex;
                // Checks if User has attempted a question
                const isAnswered = userAnswers.hasOwnProperty(actualIndex);
                return (
                  <Button
                    key={actualIndex}
                    variant="q_select"
                    // Jump directly to this specific question when the number is clicked
                    onClick={() => handleJumpToQuestion(actualIndex)}
                    className={`hover:bg-purple-300 ${isCurrent
                      ? 'bg-purple-400 text-white!' // Current Question
                      : isAnswered
                        ? 'bg-yellow-200 text-yellow-400 border-yellow-400' // Answered Question
                        : 'bg-white text-gray-400 border-gray-400' // Unanswered or Skipped Question
                      }`}
                  >
                    {actualIndex + 1}
                  </Button>
                );
              })}
            </div>

            {/* Right Arrow: Moves to the next page */}
            <button
              // Increase page by 1 using Math.min to ensure it doesn't exceed the total pages
              onClick={() => setQuestionPage(Math.min(totalPages - 1, questionPage + 1))}
              // Disable the button if the user has reached the last available page
              disabled={questionPage >= totalPages - 1}
              className={`p-1 rounded-full border-2 border-black transition-colors ${questionPage >= totalPages - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-purple-300'}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          {/* Question X out of Y */}
          <span className="font-bold text-black text-sm">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>
        {/* Right: Next Button */}
        <Button
          onClick={handleNext}
          variant="purple"
          className='hover:bg-purple-500'
        >
          {currentQuestionIndex + 1 === questions.length ? "Finish" : "Next"}
        </Button>
      </footer>
    </div>
  );
};

export default ExamPage;