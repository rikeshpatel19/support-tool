import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle, Cat, Brain, Calculator, BookOpen, Lightbulb, Shapes, CirclePoundSterling } from 'lucide-react';
import { getUser } from '../services/api';
import Button from '../components/Button'
import Card from '../components/Card';
import SubjectCard from '../components/SubjectCard';
import BottomNav from '../components/BottomNav';
import Span from '../components/Span';

const StudentDashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Requires Commenting
    useEffect(() => {
        const loadData = async () => {
            const storedId = localStorage.getItem("userID");

            if (!storedId || storedId === "undefined") {
                console.warn("No user ID found, redirecting to login...");
                navigate('/login');
                return;
            }

            try {
                const userData = await getUser(storedId);
                setUser(userData); 
            } catch (err) {
                console.error("Error fetching user:", err);
            }
        };
        loadData();
    }, [navigate]);

    if (!user) {
        return <div>Loading your profile... (Make sure you are logged in)</div>;
    }

    return (
        <div id="StudentDashboard" className="min-h-screen bg-gray-50 font-sans pb-24">
            {/* --- HEADER --- */}
            {/*"fixed top-0 w-full bg-white p-4 border-b border-gray-200 z-10" */}
            <header className="bg-white p-4 border-b border-gray-200 sticky z-10">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    {/* Coin Counter */}
                    <div className="flex items-center group animate-in fade-in zoom-in duration-300">
                        {/* Pound Icon */}
                        <div className="mr-1">
                            <CirclePoundSterling size={32} className="text-yellow-500" />
                        </div>
                        {/* User Points */}
                        <div className="flex flex-col leading-none text-center text-yellow-500 font-bold">
                            <span className="text-[20px] mb-1">{user.points.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* User Profile */}
                    <div className="flex items-center gap-3">
                        <span className="text-lg font-medium text-gray-700">{user.username}</span>
                        <UserCircle size={32} className="text-gray-800" onClick={() => navigate('/login')}  />
                    </div>
                </div>
            </header>

            {/* --- MAIN CONTENT --- */}
            <main className="max-w-4xl mx-auto p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 1. The Greeting Card (Span 2 columns) */}
                    <Card className="md:col-span-2 flex items-center gap-6">
                        <div className="w-24 h-24 flex items-center justify-center">
                            <Cat size={128} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Good morning, {user.firstName}!</h1>
                            <p className="text-gray-500 mt-1">Ready to learn something new?</p>
                        </div>
                    </Card>

                    {/* 2. The Brain Boost Card (Span 1 column) */}
                    <Card className="flex flex-col items-center text-center">
                        <div className="flex items-center gap-2 mb-4">
                            <Brain size={24} />
                            <h2 className="font-bold">Daily Brain Boost</h2>
                        </div>
                        <div className="bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4 shadow-sm">
                            Questions to revisit: 5
                        </div>
                        <Button>Start Review</Button>
                    </Card>
                </div>

                {/* Explore / Subjects Section */}
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Explore</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        <SubjectCard
                            name="Maths"
                            icon={<Calculator size={32} />}
                            onClick={() => navigate('/subject/maths')}
                        />

                        <SubjectCard
                            name="English"
                            icon={<BookOpen size={32} />}
                            onClick={() => navigate('/subject/english')}
                        />

                        <SubjectCard
                            name="Verbal Reasoning"
                            icon={<Lightbulb size={32} />}
                            onClick={() => navigate('/subject/vr')}
                        />

                        <SubjectCard
                            name="Non-Verbal Reasoning"
                            icon={<Shapes size={32} />}
                            onClick={() => navigate('/subject/nvr')}
                        />

                    </div>
                </div>
            </main>

            {/* --- BOTTOM NAVIGATION --- */}
            <BottomNav activePage="home" />
        </div>
    )
}

export default StudentDashboard;