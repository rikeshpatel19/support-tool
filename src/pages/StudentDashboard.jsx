import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coins, UserCircle, Cat, Brain, Calculator, BookOpen, Lightbulb, Shapes, Home, ClipboardList, ShoppingCart, Library, UserCog } from 'lucide-react';
import { getUser } from '../services/api';
import Button from '../components/Button'
import Card from '../components/Card';
import SubjectCard from '../components/SubjectCard';
import BottomNav from '../components/BottomNav';
import Span from '../components/Span';

const StudentDashboard = () => {
    const [isPressed, setIsPressed] = useState(false);

    // Default values for user to start with
    const [user, setUser] = useState({
        username: "Loading...",
        points: 0
    });

    useEffect(() => {
        const loadData = async () => {
            const data = await getUser(); // Call the service
            setUser(data); // Update the state
        };
        loadData();
    }, []);

    const navigate = useNavigate();

    return (
        <div id="StudentDashboard" className="min-h-screen bg-gray-50 font-sans pb-24">
            {/* --- HEADER --- */}
            {/*"fixed top-0 w-full bg-white p-4 border-b border-gray-200 z-10" */}
            <header className="bg-white p-4 border-b border-gray-200 sticky z-10">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    {/* Coin Counter */}
                    <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
                        <div className="bg-black text-white p-1.5 rounded-full">
                            <Coins size={16} />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-bold text-gray-900">{user.points.toLocaleString()}</span>
                            <span className="text-[10px] uppercase font-bold text-gray-500">Coins</span>
                        </div>
                    </div>

                    {/* User Profile */}
                    <div className="flex items-center gap-3">
                        <span className="text-lg font-medium text-gray-700">{user.username}</span>
                        <UserCircle size={32} className="text-gray-800" />
                    </div>
                </div>
            </header>

            {/* --- MAIN CONTENT --- */}
            <main className="max-w-4xl mx-auto p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 1. The Greeting Card (Span 2 columns) */}
                    <Card className="md:col-span-2 flex items-center gap-6">
                        <div className="bg-amber-100 w-24 h-24 rounded-full border-2 border-black flex items-center justify-center">
                            <Cat size={48} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Good morning, {user.username}!</h1>
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

                {/* Test Section */}
                {/* <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Testing</h3>
                    <Button onClick={() => {
                        console.log("Button clicked!");
                        console.log("Current state is:", isPressed);
                        setIsPressed(!isPressed);
                    }} isSelected={isPressed} variant="q_select">21</Button>
                </div> */}
                <button onClick={() => navigate('/login')} >Login</button>
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
                            onClick={() => navigate('/subject/verbal_reasoning')}
                        />

                        <SubjectCard
                            name="Non-Verbal"
                            icon={<Shapes size={32} />}
                            onClick={() => navigate('/subject/non_verbal_reasoning')}
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