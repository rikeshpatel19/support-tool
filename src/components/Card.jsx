const Card = ({ children, variant = "primary", className = "" }) => {

    const variants = {
        primary: "bg-white p-6 rborder border-gray-100",
        secondary: "bg-black p-6 rborder border-gray-100"
    };
    
    return (
        <div className={`${variants[variant]} ${className}`}>{children}</div>
    );
};

export default Card;