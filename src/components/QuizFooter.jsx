import Button from '../components/Button';
import NumberStrip from '../components/NumberStrip';
import { getDynamicQuestions, completeQuiz, finaliseQuizResults } from '../services/api';

const QuizFooter = ({ quizID, currentPoints, currentScore, themeStyle,
    currentQuestionIndex, questions, totalQuestions, userAnswers, quizType,
    setCurrentQuestionIndex, questionPage, setQuestionPage, perPage, setIsFinished,
    setQuestions, setDynamicQuestionIDs, batchScore, currentDifficulty, subjectID,
    setCurrentDifficulty, setBatchScore, setErrorMessage, setCautionMessage, isSubmitting, setIsSubmitting }) => {

    // Calculates the current page based on current quiz type
    const getPage = (index) => {
        // console.log("Index: ", index);
        // console.log("Page: ", Math.floor((index || 0) / perPage));
        // Example: Question 8 (index 7) for Static Quiz --> 0.7 rounds down to Page 0
        // Example: Question 11 (index 10) for Static Quiz --> 1.1 rounds down to Page 1
        return (Math.floor((index || 0) / perPage));
    };

    // Handle clicking the "Next" button + saving points earned
    const handleNext = async () => {
        // Used to prevent double submits
        if (isSubmitting) return;
        // Clear previous messages
        setErrorMessage("");
        setCautionMessage("");
        // User needs to answer question before moving on to the next question
        if (quizType === 'dynamic' && !userAnswers[currentQuestionIndex]) {
            setCautionMessage("Please answer this question before moving on!");
            return;
        }

        const percentage = (currentScore / totalQuestions) * 100;
        const batchEnd = (currentQuestionIndex + 1) % 5 === 0;
        const quizEnd = (currentQuestionIndex + 1) >= totalQuestions;

        if (quizEnd) {
            const storedID = localStorage.getItem("userID");
            if (storedID) {
                setIsSubmitting(true);
                const questionsAnswered = Object.keys(userAnswers).length;
                console.log("Questions Answered: ", questionsAnswered);

                let nextDifficulty = currentDifficulty;

                if (quizType === 'dynamic') {
                    console.log("Last Difficulty Calculation");
                    // Determine new difficulty based on performance of the last 5 questions (Q16-20)
                    nextDifficulty = calculateNextDifficulty(batchScore, currentDifficulty);
                }

                const quizResults = {
                    score: currentScore,
                    questionsAnswered: questionsAnswered,
                    totalQuestions: totalQuestions,
                    percentage: percentage,
                };

                console.log("Percentage: ", percentage);
                console.log("Difficulty: ", nextDifficulty);

                // Updates the users completedQuizzes array and their total points

                const [completeResponse, finaliseResponse] = await Promise.all([
                    completeQuiz(storedID, quizID, subjectID, currentPoints, percentage, nextDifficulty),
                    finaliseQuizResults(storedID, subjectID, quizID, quizResults)
                ])

                if (completeResponse.error || finaliseResponse.error) {
                    setErrorMessage(completeResponse.error || finaliseResponse.error);
                    setIsSubmitting(false);
                    return;
                }

                console.log("Result saved and progress cleared");
            }
            setIsFinished(true);
        } else if (quizType === 'dynamic' && (currentQuestionIndex + 1) === questions.length && batchEnd && !quizEnd) {
            // Determine new difficulty based on performance of the 5 questions (Q1-5, Q6-10 etc)
            const nextDifficulty = calculateNextDifficulty(batchScore, currentDifficulty);
            // Fetch the next batch
            const dynamicResponse = await getDynamicQuestions(quizID, subjectID, nextDifficulty);
            const nextBatch = dynamicResponse.data;
            if (dynamicResponse.error) {
                setErrorMessage(dynamicResponse.error);
                return;
            }

            if (nextBatch && nextBatch.length > 0) {
                // Takes existing questions (prev) and adds the 5 new questions (nextBatch) to the end 
                // Allows the user to go back to previous questions
                setQuestions(prev => [...prev, ...nextBatch]);
                // Maps through new questions to grab their IDs, adds them to the existing list
                setDynamicQuestionIDs(prev => [...prev, ...nextBatch.map(q => q._id)]);
                // Sets new difficulty based on how the student performed 
                setCurrentDifficulty(nextDifficulty);
                // Resets counter for new batch
                setBatchScore(0);
                // Increments index so the next question is in view
                setCurrentQuestionIndex(prev => prev + 1);
            }
        }
        if (currentQuestionIndex < totalQuestions && !quizEnd) {
            const nextIndex = currentQuestionIndex + 1;
            setCurrentQuestionIndex(nextIndex);
            // Update page based on the new index
            setQuestionPage(getPage(nextIndex));
        }
    };

    // Handle clicking the "Previous" button
    const handlePrevious = () => {
        // Clear previous messages
        setErrorMessage("");
        setCautionMessage("");
        if (currentQuestionIndex > 0) {
            const prevIndex = currentQuestionIndex - 1;
            setCurrentQuestionIndex(prevIndex);
            // Update page based on the new index
            setQuestionPage(getPage(prevIndex));
        }
    };

    const calculateNextDifficulty = (correctCount, currentDifficulty) => {
        let difficultyChange = 0;
        console.log("Correct Answers in Batch: ");
        console.log(correctCount);
        if (correctCount === 5) {
            difficultyChange = 2;  // 5 Right: Up 2
            console.log("2 Levels Up");
        } else if (correctCount === 4) {
            difficultyChange = 1;  // 4 Right: Up 1
            console.log("1 Level Up");
        } else if (correctCount === 3) {
            difficultyChange = 0;  // 3 Right: Maintain
            console.log("Maintain Difficulty");
        } else if (correctCount >= 1) {
            difficultyChange = -1; // 1 or 2 Right: Down 1
            console.log("1 Level Down");
        } else if (correctCount === 0) {
            difficultyChange = -2; // 0 Right: Down 2
            console.log("2 Levels Down");
        }
        console.log("Difficulty Change: ", difficultyChange);
        const newDifficulty = Math.max(1, Math.min(5, currentDifficulty + difficultyChange));
        console.log("New Difficulty: ", newDifficulty);
        return newDifficulty;
    };

    return (
        <footer className="p-4 border-t-2 border-black flex justify-between items-center bg-white sticky bottom-0 z-10" style={themeStyle}>
            {/* Left: Previous Button */}
            <Button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                variant="themed"
                className={`${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-(--hover)'}`}
            >
                Previous
            </Button>
            {/* Centre: Number Strip + Text */}
            <div className="flex flex-col items-center gap-2">
                {/* Interactive Number Strip with pagination */}
                <NumberStrip
                    questions={questions}
                    totalQuestions={totalQuestions}
                    currentQuestionIndex={currentQuestionIndex}
                    userAnswers={userAnswers}
                    quizType={quizType}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    questionPage={questionPage}
                    setQuestionPage={setQuestionPage}
                    perPage={perPage}
                    setErrorMessage={setErrorMessage}
                    setCautionMessage={setCautionMessage}
                />
                {/* Question X out of Y */}
                <span className="font-bold text-black text-sm">
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                </span>
            </div>
            {/* Right: Next Button */}
            <Button
                onClick={handleNext}
                variant="themed"
                className='hover:bg-(--hover)'
                disabled={isSubmitting}
            >
                {isSubmitting ? "Submitting" : (currentQuestionIndex + 1 === totalQuestions ? "Finish" : "Next")}
            </Button>
        </footer>
    );
};

export default QuizFooter;