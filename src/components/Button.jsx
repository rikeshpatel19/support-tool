const Button = ({ children, onClick, variant = 'primary', className = '' }) => {

  const baseStyle = "border-black border-2 flex items-center justify-center gap-2 shadow-sm transition-all duration-200";
  
  const variants = {
    primary: "bg-gray-400 text-white px-4 py-2 font-bold rounded-lg w-full shadow-medium hover:bg-gray-500 hover:-translate-y-px active:scale-95",
    secondary: "bg-white px-4 py-2 text-gray-700 border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 active:scale-95",
    black: "bg-black text-white rounded-lg hover:bg-gray-800 shadow-medium active:shadow-none active:translate-y-1",
    grey: "bg-gray-400 text-white font-bold py-3 px-6 rounded-xl shadow-hard active:translate-y-1 active:shadow-none",
    danger: "bg-red-500 px-4 py-2 text-white rounded-md hover:bg-red-600 active:scale-95",
    ghost: "bg-transparent border-transparent px-4 py-2 text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-700",
    option_txt: "hover:bg-neutral-200 group inline-flex items-center gap-3 rounded-xl bg-white p-2 pr-4",
    q_select: "text-md p-4 w-5 h-5 rounded-md hover:bg-purple-200",
    card_topic: "bg-gray-400 h-32 rounded-xl !p-4 relative hover:bg-gray-500 shadow-hard text-white text-left font-bold text-lg !justify-start hover:-translate-y-0.5 active:scale-95"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>
  );
};

export default Button;