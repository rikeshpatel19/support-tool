import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PauseCircle, Cat, Save, Play, ChevronLeft, ChevronRight, CirclePoundSterling } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Span from '../components/Span';
import Badge from '../components/Badge';
// Import API service functions to fetch data
import { getQuestions } from '../services/api';

const QuizPage = () => {
  const navigate = useNavigate();
  // Extract 'subjectId' and 'topicId' from the URL
  const { subjectId, topicId } = useParams();

  // --- STATE MANAGEMENT ---
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
  // State to track if the Pause Menu is open
  const [isPaused, setIsPaused] = useState(false);

  // State to track which "page" of question numbers is currently visible in the navigation bar
  const [questionPage, setQuestionPage] = useState(0);
  // Fixed limit of 10 question numbers to display at one time
  const questionsPerPage = 10;

  // --- LOAD DATA ---
  // Call API to get questions for the specfic topic
  // useEffect(() => {
  //   const load = async () => {
  //     const qData = await getQuestions(topicId);
  //     setQuestions(qData);
  //   };
  //   load();
  // }, [topicId]);

  // Requires Commenting
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await getQuestions(topicId);
      if (data) {
        setQuestions(data.questions);
      }
      setLoading(false);
    };
    load();
  }, [topicId]);

  if (!questions || questions.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl">Waiting for quiz data...</h2>
        <p className="text-gray-500">If this persists, check if the Topic ID matches your database.</p>
      </div>
    );
  }

  // Calculate start and end indices for the number strip
  // Determines the starting index of the current "page" of question numbers
  const startIndex = questionPage * questionsPerPage;
  // Creates a sub-array of questions to render as buttons based on the current page and limit
  const visibleQuestions = questions.slice(startIndex, startIndex + questionsPerPage);
  // Calculates the total number of pages needed by dividing total questions by the limit and rounding up
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  // --- DERIVED STATE ---
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
  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;

  // --- EVENT HANDLERS ---
  // Handle when a user clicks an answer option (A, B, C, D, E)
  const handleOptionClick = (option) => {
    // Prevent changing answer if already selected for this specific question
    if (userAnswers[currentQuestionIndex]) return;

    // Save the answer to our object: { 0: "Answer A", 1: "Answer B" }
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: option
    }));
  };

  // Handle clicking the "Next" button
  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  // Handle clicking the "Previous" button
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Handle clicking a specific number in the bottom nav bar
  const handleJumpToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  // --- PAUSE MENU HANDLERS ---
  // Open the pause menu
  const handlePause = () => {
    setIsPaused(true);
  };
  // Close the pause menu
  const handleResume = () => {
    setIsPaused(false);
  };
  // "Save progress" (not done yet) and navigate back to the previous page
  const handleSaveAndExit = () => {
    console.log("Saving progress...", userAnswers);
    navigate(-1);
  };

  // --- HELPER STYLES ---
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

  // Helper for the square label (A, B, C...)
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

  // Logic to determine which Badge to award based on score percentage
  const getBadgeTier = () => {
    if (questions.length === 0) return 'none'; // Safety check
    const percentage = (currentScore / questions.length) * 100;

    // Return tier string based on thresholds
    if (percentage >= 70) return 'gold';
    if (percentage >= 50) return 'silver';
    if (percentage >= 40) return 'bronze';
    return 'none';
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Pause Menu Overlay */}
      {isPaused && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-500/30 backdrop-blur-sm animate-in fade-in duration-200">
          {/* The Menu Card */}
          <Card className='w-100 h-100'>
            <h2 className="text-3xl text-center font-black mb-15">Paused</h2>
            <div className="space-y-4">
              {/* Resume Button */}
              <Button variant="black" onClick={handleResume} className="w-full justify-center p-2">
                <Play size={20} className="mr-2 fill-white" /> Resume
              </Button>
              {/* Save & Exit Button */}
              <Button variant="secondary" onClick={handleSaveAndExit} className="w-full justify-center">
                <Save size={20} className="mr-2" /> Save & Exit
              </Button>
            </div>
          </Card>
        </div>
      )}
      {/* Quiz Completion Overlay */}
      {isFinished && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-500/30 backdrop-blur-sm animate-in fade-in duration-200">
          <Card className="text-center p-10 flex flex-col items-center gap-6 w-96">
            <h1 className="text-4xl font-black">Quiz Complete!</h1>

            {/* Badge Display */}
            <div className="transform scale-125">
              <Badge tier={getBadgeTier()} size={100} />
            </div>

            {/* Dynamic Message */}
            <h2 className="text-2xl font-bold capitalize">
              {getBadgeTier() === 'none' ? "Keep Practicing!" : `You earned ${getBadgeTier()}!`}
            </h2>

            {/* Score and Coins */}
            <div className="w-full space-y-2 text-xl font-medium border-t-2 border-dashed border-gray-300 pt-4">
              <div className="flex justify-between">
                <span>Score:</span>
                <span>{currentScore} / {questions.length}</span>
              </div>
              <div className="flex justify-between text-yellow-600">
                <span>Coins:</span>
                <span>+{currentPoints}</span>
              </div>
            </div>

            {/* Back Button */}
            <Button variant="black" onClick={() => navigate(-1)} className="w-full justify-center mt-2 p-2">
              Back to Topics
            </Button>
          </Card>
        </div>
      )}

      {/* HEADER */}
      <header className="border-b-2 border-black p-4 flex items-center justify-between bg-white sticky top-0 z-10">
        {/* Left: Pause & Display Subject (formatted) and Topic */}
        <div className="flex items-center gap-4">
          <button onClick={handlePause} className="hover:opacity-70">
            <PauseCircle size={32} strokeWidth={2} />
          </button>
          <span className="font-bold text-xl capitalize">
            <span>{subjectId.replace('_', ' ')}:</span> {topicId}
          </span>
        </div>
        {/* Centre: Progress Bar */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1/3 h-4 bg-gray-200 rounded-full border-2 border-black overflow-hidden">
          {/* The inner filling bar that changes width based on progressPercent */}
          <div className="h-full bg-gray-800 transition-all duration-300" style={{ width: `${progressPercent}%` }} />
        </div>
        {/* Coin Counter */}
        <div className="flex items-center group animate-in fade-in zoom-in duration-300">
          {/* Pound Icon */}
          <div className="mr-1">
            <CirclePoundSterling size={32} className="text-yellow-500" />
          </div>
          {/* User Points */}
          <div className="flex flex-col leading-none text-center text-yellow-500 font-bold">
            <span className="text-[20px] mb-1">{currentPoints}</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-6 flex flex-col gap-6">
        {/* The Big Question Card */}
        <div className="border-2 border-black rounded-3xl p-8 min-h-75 relative flex flex-col justify-between">
          <div className="flex justify-between items-start">
            {/* Question Text */}
            <h2 className="text-2xl md:text-3xl font-bold leading-tight max-w-2xl">
              <span className="text-4xl mr-3">{currentQuestionIndex + 1}</span>
              {question.question_text}
            </h2>
            {/* Mascot / Feedback Area */}
            <div className="hidden md:flex flex-col items-center">
              {/* Cat Placeholder */}
              {/* I want to change this for an expression later if possible */}
              {selectedOption ? (
                selectedOption === question.correct_option ?
                  <Cat size={48} color='green' strokeWidth={1.5} /> :
                  <Cat size={48} color='red' strokeWidth={1.5} />
              ) : (
                <Cat size={48} strokeWidth={1.5} />
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
          {question?.question_image && (
            <div className="w-full flex justify-center mt-2 transition-all duration-300">
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
            // Convert index 0->A, 1->B, etc.
            const label = String.fromCharCode(65 + index);

            return (
              <Button
                key={index}
                onClick={() => handleOptionClick(option)}
                disabled={!!selectedOption} // Disable after clicking once
                variant='option_txt'
                className={getOptionStyle(option)}>
                {/* The A/B/C/D Label Square */}
                <Span className={getLabelStyle(option)} varaint='option_txt'>{label}</Span>
                {/* The Option Text */}
                <span className={`font-bold text-lg ${getTextStyle(option)}`}>{option}</span>
              </Button>
            );
          })}
        </div>
        {/* Explanation Text (Only shows after answering) */}
        {selectedOption && (
          <div className="mt-4 p-4 bg-gray-50 border-l-4 border-black">
            <h3 className="font-bold text-lg">Answer:</h3>
            <p className="text-gray-700">The correct answer is {question.correct_option}.</p>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="p-4 border-t-2 border-black flex justify-between items-center bg-white sticky bottom-0 z-10">
        {/* LEFT: Previous Button */}
        <Button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          variant='grey'
          className={`${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-500'}`}
        >
          Previous
        </Button>
        {/* CENTER: Wrapper for Numbers AND Text */}
        <div className="flex flex-col items-center gap-2">
          {/* INTERACTIVE NUMBER STRIP WITH PAGINATION */}
          <div className="hidden md:flex items-center gap-3">

            {/* Left Arrow: Moves to the previous set of 10 questions */}
            <button
              // Decrease "page" by 1 using Math.max to ensure it never goes below 0
              onClick={() => setQuestionPage(Math.max(0, questionPage - 1))}
              // Disable the button if the user is already on the first page
              disabled={questionPage === 0}
              className={`p-1 rounded-full border-2 border-black transition-colors ${questionPage === 0 ? 'opacity-30' : 'hover:bg-purple-100'}`}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {/* Loop through only the 10 questions currently visible in the strip */}
              {visibleQuestions.map((_, idx) => {
                // Calculate the actual index (First Button on Page 2 is Question 11, this would have the Index 10)
                console.log(idx)
                const actualIndex = startIndex + idx;
                return (
                  <Button
                    key={actualIndex}
                    variant='q_select'
                    // Jump directly to this specific question when the number is clicked
                    onClick={() => handleJumpToQuestion(actualIndex)}
                    className={`${actualIndex === currentQuestionIndex ? 'bg-purple-300 text-white!' : 'bg-white hover:bg-gray-100'}`}
                  >
                    {actualIndex + 1}
                  </Button>
                );
              })}
            </div>

            {/* Right Arrow: Moves to the next set of 10 questions */}
            <button
              // Increase page by 1 using Math.min to ensure it doesn't exceed the total pages
              onClick={() => setQuestionPage(Math.min(totalPages - 1, questionPage + 1))}
              // Disable the button if the user has reached the last available page
              disabled={questionPage >= totalPages - 1}
              className={`p-1 rounded-full border-2 border-black transition-colors ${questionPage >= totalPages - 1 ? 'opacity-30' : 'hover:bg-purple-100'}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          {/* Question X out of Y */}
          <span className="font-bold text-black text-sm">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>
        {/* RIGHT: Next Button */}
        <Button
          onClick={handleNext}
          variant='grey'
          className='hover:bg-gray-500'
        >
          {currentQuestionIndex + 1 === questions.length ? "Finish" : "Next"}
        </Button>
      </footer>
    </div>
  );
};

export default QuizPage;