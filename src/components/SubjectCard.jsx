import React from 'react';

const SubjectCard = ({ name, icon, onClick }) => {
  return (
    <button onClick={onClick} className="bg-white h-40 w-full rounded-3xl border-2 border-black flex flex-col 
    items-center justify-center gap-3 hover:bg-gray-50 
    transition-all active:scale-95 
    shadow-hard hover:-translate-y-0.5">

      {/* Icon Container */}
      <div className="text-gray-800 transform 
      transition-transform group-hover:scale-110">
        {icon}
      </div>
      
      {/* Title */}
      <span className="font-bold text-lg text-center 
      px-2 leading-tight text-gray-900">
        {name}
      </span>
    </button>
  );
};

export default SubjectCard;