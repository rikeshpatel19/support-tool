import Badge from '../components/Badge';

const TopicCard = ({ name, status, theme, progress, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: theme.secondary,
        borderColor: theme.primary,
        color: theme.primary,
        boxShadow: theme.shadow
      }}
      className="border-2 flex items-center gap-2 shadow-sm transition-all duration-200 h-32 rounded-xl p-4 relative shadow-hard text-left font-bold text-lg hover:-translate-y-0.5 active:scale-95"
    >
      {/* The Topic Name */}
      <span>{name}</span>

      {/* The Badge */}
      <div className="absolute bottom-3 right-3">
        <Badge tier={status} size={40} />
      </div>

      {/* Progress Bar Container (To the left of the badge) */}
      {progress > 0 && (
        <div className="absolute bottom-5 w-32 flex-1 flex flex-col">
          {/* Percentage Text (Underneath the main subject text) */}
          <span className="text-[10px] font-bold  text-gray-500 uppercase tracking-wider mb-1">
            {progress}% Complete
          </span>

          {/* The actual progress bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden" >
            <div
              className="h-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%`, backgroundColor: theme.primary }}
            />
          </div>
        </div>
      )}
    </button>
  );
}

export default TopicCard;