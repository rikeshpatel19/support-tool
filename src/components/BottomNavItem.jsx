import React from 'react';

const BottomNavItem = ({ label, icon, active = false, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
        active 
          ? 'text-pink-500' 
          : 'text-gray-400 hover:text-gray-900'
      }`}
    >
      {/* Icon Wrapper to ensure consistent size */}
      <div className={active ? "transform scale-110 transition-transform" : ""}>
        {icon}
      </div>
      
      <span className="text-[10px] font-bold uppercase tracking-wide">
        {label}
      </span>
    </button>
  );
};

export default BottomNavItem;