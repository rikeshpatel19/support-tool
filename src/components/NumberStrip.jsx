import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';

const NumberStrip = ({ totalQuestions, currentQuestionIndex, userAnswers, quizType, setCurrentQuestionIndex, 
    questionPage, setQuestionPage, perPage, setErrorMessage, setCautionMessage }) => {

    // Determines the starting index of the current "page" of question numbers
    const startIndex = questionPage * perPage;
    // Calculates the total number of pages needed by dividing total questions by the limit and rounding up
    const totalPages = Math.ceil(totalQuestions / perPage);
    // Placeholder array (filled with "undefined" rather than empty spaces) used to map the correct number of buttons for the current page
    const visibleQuestions = Array.from({ length: perPage });

    // Handle clicking a specific number in the number strip
    const handleJumpToQuestion = (newIndex) => {
        // Clear previous messages
        setErrorMessage("");
        setCautionMessage("");
        // Array of all question indices that have been answered in the quiz
        const answeredIndices = Object.keys(userAnswers).map(Number);
        // console.log("Answered Indices: ", ...answeredIndices);
        // Finds the highest index of the questions answered or returns -1 (no questions answered)
        const maxAnsweredIndex = answeredIndices.length > 0 ? Math.max(...answeredIndices) : -1;
        // console.log("Highest Question Index: ", maxAnsweredIndex);
        // If the quiz is dynamic and the question they want to go to is one or more after the latest question
        if (quizType === 'dynamic' && newIndex > maxAnsweredIndex + 1) {
            // Need to change this for a "caution" message eventually
            setCautionMessage("Please answer Question " + (maxAnsweredIndex + 2) + " before moving on!");
            return;
        }
        setCurrentQuestionIndex(newIndex);
    };

    return (
        <div className="hidden md:flex items-center gap-3">
            {/* Left Arrow: Moves to the previous page */}
            <button
                // Decrease "page" by 1 using Math.max to ensure it never goes below 0
                onClick={() => setQuestionPage(Math.max(0, questionPage - 1))}
                // Disable the button if the user is already on the first page
                disabled={questionPage === 0}
                className={`p-1 rounded-full border-2 border-black transition-colors ${questionPage === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-(--hover)'}`}
            >
                <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
                {/* Loop through placeholders, index used to calculate question numbers in the strip */}
                {visibleQuestions.map((_, idx) => {
                    // Calculate the actual index (Static Quiz: First Button on Page 2 is Question 11, this would have the Index 10)
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
                            className={`${isCurrent
                                ? 'bg-(--primary) text-white!'  // Current Question
                                : isAnswered
                                    ? 'bg-yellow-200 text-yellow-400 border-yellow-400' // Answered Question
                                    // ? 'bg-(--secondary) text-(--primary) border-(--primary)!' // Debating if I like this
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
                // Disable the button if the user has reached the last questions
                disabled={startIndex + perPage >= totalQuestions}
                className={`p-1 rounded-full border-2 border-black transition-colors 
                    ${(startIndex + perPage >= totalQuestions) ? 'opacity-30 cursor-not-allowed' : 'hover:bg-(--hover)'}`}
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
};

export default NumberStrip;