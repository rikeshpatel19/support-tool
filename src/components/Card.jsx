const Card = ({ children, variant = "primary", className = "" }) => {

    const baseStyle = "p-6 rounded-3xl border-2 border-black transition-all duration-200";

    const variants = {
        primary: "bg-white shadow-hard",
        secondary: "bg-gray-100 border-gray-300 shadow-none", // Useful for disabled or background cards
        highlight: "bg-yellow-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" // Might want a featured card later
    };

    return (
        <div className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</div>
    );
};

export default Card;