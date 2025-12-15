const Card = ({ children, variant = "primary", className = "" }) => {

    const baseStyle = "w-1/4 min-w-auto max-w-fit m-2 p-6 rounded-md border-b-neutral-950 border-solid border"
    const variants = {
        primary: "bg-neutral-100",
        secondary: "bg-neutral-200"
    };
    
    return (
        <div className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</div>
    );
};

export default Card;