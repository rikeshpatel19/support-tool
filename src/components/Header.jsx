import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CirclePoundSterling } from 'lucide-react';

const Header = ({ label, points }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isShopPage = location.pathname === '/shop';

    return (
        <header className="bg-white border-b-2 border-gray-200 p-6 sticky top-0 z-20">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                {/* Back Button */}
                <button onClick={() => navigate("/sd")} className="p-2 hover:bg-gray-100 rounded-full">
                    <ArrowLeft size={28} />
                </button>
                {/* Dynamic Title */}
                <h1 className="text-3xl font-black italic tracking-tighter">{label}</h1>
                {/* Conditional Coin Display */}
                {isShopPage ? (
                    <div className="flex items-center group animate-in fade-in zoom-in duration-300">
                        {/* Pound Icon */}
                        <div className="mr-1">
                            <CirclePoundSterling size={32} className="text-yellow-500" />
                        </div>
                        {/* User Points */}
                        <div className="flex flex-col leading-none text-center text-yellow-500 font-bold">
                            <span className="text-[24px] mb-1">{points}</span>
                        </div>
                    </div>
                ) : (
                    /* Spacer to keep the title centered when coins are hidden */
                    <div className="w-10 md:w-24" />
                )}
            </div>
        </header>
    );
};

export default Header;