import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/api';

const ReviewPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const storedID = localStorage.getItem("userID");
                const userData = await getUser(storedID);
                setUser(userData);
            } catch (error) {
                console.error("Error loading Review Page:", error);
            }
            setLoading(false);
        };
        loadData();
    }, []);

    if (loading) return <div className="p-10 text-center font-bold">Loading Review...</div>;

    return (
        <div className="min-h-screen bg-white font-sans pb-24">
            <Header label="Review" />

            <div className="max-w-4xl mx-auto p-6 space-y-8">
                {/* Section 1: Today's Review */}
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Today's Review</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <p className="text-gray-500 italic">Quizzes that need to be revisited today</p>
                    </div>
                </section>

                {/* Section 2: Upcoming */}
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <p className="text-gray-500 italic">Quizzes to be reviewed at a later date</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ReviewPage;