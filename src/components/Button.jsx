import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  
  // Define base styles that apply to ALL buttons
  const baseStyle = "px-4 py-2 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm active:scale-95";
  
  // Define specific styles for each variant
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md",
    secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>
  );
};

export default Button;