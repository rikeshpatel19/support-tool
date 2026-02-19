const SubjectCard = ({ theme, onClick }) => {
  const Icon = theme.icon;

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: theme.secondary,
        borderColor: theme.primary,
        color: theme.primary,
        boxShadow: theme.shadow
      }}
      className="flex flex-col items-center justify-center gap-3 h-40 w-full rounded-3xl border-4 transition-all hover:-translate-y-1 active:scale-95"
    >
      {/* Icon */}
      <Icon size={40} />
      {/* Title */}
      <span className="text-xl font-bold tracking-tight">{theme.label}</span>
    </button>
  );
};

export default SubjectCard;