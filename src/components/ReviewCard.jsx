const ReviewCard = ({ name, theme, daysRemaining, onClick }) => {
    // Used to change colour of label
    const isDue = daysRemaining <= 0;

    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: theme.secondary,
                borderColor: theme.primary,
                color: theme.primary,
                boxShadow: theme.shadow
            }}
            className="border-2 flex flex-col justify-between transition-all duration-200 h-32 rounded-xl p-4 relative shadow-hard text-left font-bold hover:-translate-y-0.5 active:scale-95"
        >
            {/* The Quiz Name */}
            <span className="text-lg">{name}</span>

            {/* Days Remaining Label */}
            <div className="flex justify-end w-full">
                <span
                    className={`px-3 py-1 rounded-lg text-xs font-bold uppercase border-2 ${isDue
                        ? 'bg-red-200 text-red-500 border-red-500'
                        : 'text-current border-current'
                        }`}
                >
                    {isDue ? 'Due Now' : `${daysRemaining} ${daysRemaining == 1 ? "day" : "days"} left`}
                </span>
            </div>
        </button>
    );
};

export default ReviewCard;