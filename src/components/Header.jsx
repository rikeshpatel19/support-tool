import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Header = ({ label }) => {
    const navigate = useNavigate();
    return (
        <div className="p-4 border-b-2 border-black flex items-center justify-between sticky top-0 bg-white z-10">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-gray-100 rounded-full">
                <ArrowLeft size={28} />
            </button>
            <h1 className="text-3xl font-black">{label}</h1>
            <div className="w-10" />
        </div>
    );
};

export default Header;