const Button = ({ children, onClick, variant = 'primary', isSelected, className = '' }) => {
  
  // Define base styles that apply to ALL buttons
  const baseStyle = "border-neutral-950 border-solid border-2 rounded-md flex items-center justify-center gap-2 shadow-sm active:scale-95";
  
  // Define specific styles for each variant
  const variants = {
    primary: "bg-gray-400 text-white px-4 py-2 font-bold border-black rounded-lg w-full shadow-medium hover:bg-gray-500 hover:-translate-y-px transition-all",
    secondary: "bg-white px-4 py-2 text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300",
    black: "bg-black text-white border-2 border-black hover:bg-gray-800 shadow-medium active:shadow-none active:translate-y-1 transition-all",
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