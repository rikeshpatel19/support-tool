const Input = ({ label, icon: Icon, type = "text", placeholder, name, value, onChange, required = false, className = "" }) => {
    return (
        <div className={`w-full ${className}`}>
            {/* Label */}
            {label && (
                <label className="block font-bold text-gray-900 mb-1 ml-1">{label}</label>
            )}
            <div className="relative">
                {/* Icon */}
                {Icon && (
                    <Icon className="absolute left-3 top-4 text-gray-500" size={20} />
                )}
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="input-field" // Uses global styling defined in index.css
                    placeholder={placeholder}
                    required={required}
                />
            </div>
        </div>
    );
};

export default Input;