import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Button from './Button';
import Badge from './Badge';

const QuizCompletionOverlay = ({ isFinished, totalQuestions, currentScore, currentPoints }) => {
    if (!isFinished) return null;

    const navigate = useNavigate();
    
    // Logic to determine which Badge to award based on score percentage
    const getBadgeTier = () => {
        if (totalQuestions === 0) return 'none'; // Safety check
        const percentage = (currentScore / totalQuestions) * 100;

        // Return tier string based on thresholds
        if (percentage >= 70) return 'gold';
        if (percentage >= 50) return 'silver';
        if (percentage >= 40) return 'bronze';
        return 'none';
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm animate-in fade-in duration-200">
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
                        <span>{currentScore} / {totalQuestions}</span>
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
    );
};

export default QuizCompletionOverlay;