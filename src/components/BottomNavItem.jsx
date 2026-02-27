const BottomNavItem = ({ label, icon, active = false, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
        active 
          ? 'text-pink-500' 
          : 'text-gray-500 hover:text-black'
      }`}
    >
      {/* Icon Wrapper to ensure consistent size */}
      <div className={active ? "transform scale-110 transition-transform" : ""}>
        {icon}
      </div>
      {/* Label */}
      <span className="text-xs font-bold uppercase tracking-wide">
        {label}
      </span>
    </button>
  );
};

export default BottomNavItem;