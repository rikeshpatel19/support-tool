import { PauseCircle, CirclePoundSterling } from 'lucide-react';
import Button from './Button';

const QuizHeader = ({ handlePause, theme, currentSubject, displayTopic, progressPercent, passage, setIsPassageOpen, currentPoints }) => {
  return (
    <header className="border-b-2 border-black p-4 flex items-center justify-between bg-white sticky top-0 z-10">
        {/* Left: Pause & Display Subject and Topic */}
        <div className="flex items-center gap-4">
          <button onClick={handlePause} className="hover:opacity-70">
            <PauseCircle size={32} />
          </button>
          <span className="font-bold text-xl capitalize">
            <span style={{ color: theme.primary }}>{currentSubject.title}:</span> {displayTopic}
          </span>
        </div>
        {/* Centre: Progress Bar */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1/3 h-4 bg-gray-200 rounded-full border-2 border-black overflow-hidden">
          {/* The inner filling bar that changes width based on progressPercent */}
          <div className="h-full transition-all duration-300" style={{ width: `${progressPercent}%`, backgroundColor: theme.primary }} />
        </div>
        {/* Conditional Passage Button */}
        {passage && (
          <Button
            onClick={() => setIsPassageOpen(true)}
            className="absolute right-60 max-w-30 text-xs"
          >
            View Passage
          </Button>
        )}
        {/* Right: Coin Counter */}
        <div className="flex items-center group">
          {/* Pound Icon */}
          <div className="mr-1">
            <CirclePoundSterling size={40} className="text-yellow-500" />
          </div>
          {/* User Points */}
          <div className="flex flex-col leading-none text-center text-yellow-500 font-bold">
            <span className="text-lg mb-px">{currentPoints}</span>
          </div>
        </div>
      </header>
  );
};

export default QuizHeader;