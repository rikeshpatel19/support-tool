import Badge from '../components/Badge';

const TopicCard = ({ name, status, theme, onClick }) => {
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
    </button>
  );
}

export default TopicCard;