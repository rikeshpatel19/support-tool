import React from 'react';

const Button = ({ children, onClick, variant = 'primary', isSelected, className = '' }) => {
  
  // Define base styles that apply to ALL buttons
  const baseStyle = "border-neutral-950 border-solid border rounded-md flex items-center justify-center gap-2 shadow-sm active:scale-95";
  
  // Define specific styles for each variant
  const variants = {
    primary: "bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 hover:shadow-md",
    secondary: "bg-white px-4 py-2 text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300",
    danger: "bg-red-500 px-4 py-2 text-white hover:bg-red-600",
    ghost: "bg-transparent px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700",
    option_txt: "hover:bg-neutral-200 group inline-flex items-center gap-3 rounded-xl border-2 border-black bg-white p-1 pr-4",
    q_select: "text-xs duration-300 ease-out p-2 w-5 h-5"
  };

  if (variant === 'q_select') {
    const base = variants[variant];
    const colourStyle = isSelected ? "bg-blue-200" : "bg-neutral-100";
    variants[variant] = `${base} ${colourStyle}`;
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>
  );
};

export default Button;