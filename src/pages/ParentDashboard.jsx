import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle, CirclePoundSterling } from 'lucide-react';
import { getUser, getResultsByUser } from '../services/api';
import Card from '../components/Card';
import BottomNav from '../components/BottomNav';
import Avatar from '../components/Avatar';
import AccountModal from '../components/AccountModal';
import { getSubjectTheme } from '../constants/subjectThemes';

const ParentDashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    // State to store the filtered user results
    const [stats, setStats] = useState(null);
    // State to check status of loading
    const [loading, setLoading] = useState(true);
    // State for the error message
    const [errorMessage, setErrorMessage] = useState("");

    const calculateStats = (results, userData) => {
        // Initially starts off at todays date 
        const lastWeek = new Date();
        // Sets it to todays date - 7 days 
        lastWeek.setDate(lastWeek.getDate() - 7);
        // Filters for results only from the last 7 days
        const weeklyResults = results.filter(res => new Date(res.completedAt) >= lastWeek);

        // Initialize totals
        let totalCorrect = 0;
        let totalAnswered = 0;
        // Initially an empty object that will store stats for specfic subjects
        const subjectBreakdown = {};

        // Loops through every quiz from the last week 
        weeklyResults.forEach(res => {
            // Adds up all the correct answers from the quizzes 
            totalCorrect += res.score;
            // Adds up all the questions answered across the quizzes
            totalAnswered += res.questionsAnswered;
            // If the subject has not been seen yet in the subjectBreakdown
            if (!subjectBreakdown[res.subjectID]) {
                // Creates a new entry for that subject
                subjectBreakdown[res.subjectID] = { correct: 0, attempted: 0, quizAttempts: 0 };
            }
            // Adds the score to the specfic subjects correct answers
            subjectBreakdown[res.subjectID].correct += res.score;
            // Adds the questions answered to the specfic subjects attempted questions
            subjectBreakdown[res.subjectID].attempted += res.questionsAnswered;
        });

        // Object to contain Total Best Percentages and Quiz Count for each subject
        const subjectMasteryData = {};

        // If the user exists and they have completedQuizzes
        if (userData && userData.completedQuizzes) {
            // Loops through each quiz that the user has completed
            userData.completedQuizzes.forEach(quiz => {
                // If the subject has not been seen in yet in the subjectMasteryData
                if (!subjectMasteryData[quiz.subjectID]) {
                    // Creates a new entry for that subject
                    subjectMasteryData[quiz.subjectID] = { totalBestPercentage: 0, quizCount: 0 };
                }
                // Sum up the best percentages for the subject
                subjectMasteryData[quiz.subjectID].totalBestPercentage += quiz.bestPercentage;
                // Keeps track of how many quizzes have been added
                subjectMasteryData[quiz.subjectID].quizCount += 1;
            });
        }

        // Object to store the Average Best Percentage and Total Quizzes Completed
        const masteryBreakdown = {};
        // Converted into an array then loops through each subject
        Object.entries(subjectMasteryData).forEach(([subjectID, data]) => {
            masteryBreakdown[subjectID] = {
                // Average Best Percentage
                averageMastery: Math.round(data.totalBestPercentage / data.quizCount),
                // Total Quizzes Completed
                totalQuizzes: data.quizCount
            };
        });

        const masteryEntries = Object.entries(masteryBreakdown);

        // Find the subject with the highest averageMastery
        const bestSubject = masteryEntries.length > 0
            // Compares two items, chooses the one with the Higher Average Best Percentage, continues with next item until one remains
            // Grabs subjectID of the item that remains using [0]
            ? masteryEntries.reduce((a, b) => a[1].averageMastery > b[1].averageMastery ? a : b)[0]
            // Returns null if no quizzes have been completed
            : null;

        // Find the subject with the lowest averageMastery
        const worstSubject = masteryEntries.length > 0
            // Compares two items, chooses the one with the Lower Average Best Percentage, continues with next item until one remains
            // Grabs subjectID of the item that remains using [0]    
            ? masteryEntries.reduce((a, b) => a[1].averageMastery < b[1].averageMastery ? a : b)[0]
            // Returns null if no quizzes have been completed
            : null;

        return {
            totalCorrect, // Every question the student got right no matter the subject over the last week
            totalAnswered, // Every question the student has answered no matter the subject over the last week
            subjectBreakdown, // Weekly Stats for each subject (Total Correct / Total Answered)
            masteryBreakdown, // Stats for Average Best Percentage and Total Quizzes Completed
            bestSubject, // Subject with the Highest Average Best Percentage
            worstSubject // Subject with the Lowest Average Best Percentage
        };
    };

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const storedID = localStorage.getItem("userID");

            const [userResponse, resultsResponse] = await Promise.all([
                getUser(storedID),
                getResultsByUser(storedID)
            ])

            const userData = userResponse.data;
            const allResults = resultsResponse.data;

            if (userResponse.error || resultsResponse.error) {
                setErrorMessage(userResponse.error || resultsResponse.error);
                return;
            }

            setUser(userData);
            const filteredStats = calculateStats(allResults, userData);
            setStats(filteredStats);
            setLoading(false);
        };
        loadData();
    }, []);

    if (errorMessage) {
        return (
            <div className="p-10 text-center">
                <div className="bg-red-100 border border-red-500 text-red-600 px-4 py-3 rounded mb-4">
                    <p><span className="font-bold">Error: </span>{errorMessage}</p>
                </div>
                <span className="text-black underline cursor-pointer hover:text-blue-600" onClick={() => navigate("/sd")}>Return to Student Dashboard</span>
            </div>
        );
    }

    if (loading || !user) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-xl">Loading your profile...</h2>
                <p className="text-gray-500">Please be patient while your profile loads.</p>
                <span className="text-black underline cursor-pointer hover:text-blue-600" onClick={() => navigate("/sd")}>Return to Student Dashboard</span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans pb-24">
            {/* Header */}
            <header className="bg-white p-4 border-b border-gray-200 sticky z-10">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    {/* Coin Counter */}
                    <div className="flex items-center group animate-in fade-in zoom-in duration-300">
                        {/* Pound Icon */}
                        <div className="mr-1">
                            <CirclePoundSterling size={40} className="text-yellow-500" />
                        </div>
                        {/* User Points */}
                        <div className="flex flex-col leading-none text-center text-yellow-500 font-bold">
                            <span className="text-lg mb-px">{user.points.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* User Profile */}
                    <div className="flex items-center gap-3">
                        <span className="text-lg font-medium text-gray-700">{user.username}</span>
                        <UserCircle size={40} className="text-gray-800" onClick={() => setIsAccountOpen(true)} />
                    </div>
                </div>
            </header>

            {/* Account Modal */}
            <AccountModal
                user={user}
                isOpen={isAccountOpen}
                onClose={() => setIsAccountOpen(false)}
                onUserUpdate={(updatedUser) => setUser(updatedUser)} // Instantly updates the dashboard
            />

            {/* Main Content */}
            <main className="max-w-4xl mx-auto p-6 space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Welcome back, {user.parentName}!</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {/* Greeting Card */}
                    <Card className="md:col-span-2 flex items-center gap-6">
                        <Avatar avatarName={user.avatar} className='fill-amber-400' size={128} strokeWidth={1.5} />
                        {/* Feel like an accent colour for the name would be nice, not sure if I want this to be the final colour */}
                        <p className="text-2xl font-semibold text-gray-900">Viewing progress for <span className="font-bold text-indigo-600">{user.studentName}</span></p>
                    </Card>

                    {/* Summary */}
                    <Card className="flex flex-col items-center text-center p-4 space-y-4">
                        {/* "?" prevents the app from crashing if stats is null */}
                        {stats?.bestSubject && stats?.worstSubject ? (
                            // Fragement (<>) used to avoid uneccesary <div>
                            <>
                                {/* Best Subject */}
                                <div>
                                    <p className="text-xs text-gray-400 font-bold">Best Subject</p>
                                    <p className="font-bold text-lg" style={{ color: getSubjectTheme(stats.bestSubject).primary }}>
                                        {getSubjectTheme(stats.bestSubject).label}
                                    </p>
                                </div>

                                {/* Worst Subject */}
                                <div className="w-full border-t border-gray-300 pt-3">
                                    <p className="text-xs text-gray-400 font-bold">Subject to Work On</p>
                                    <p className="font-bold text-lg" style={{ color: stats.bestSubject === stats.worstSubject ? "#6a7282" : getSubjectTheme(stats.worstSubject).primary }}>
                                        {stats.bestSubject === stats.worstSubject ? "N/A" : getSubjectTheme(stats.worstSubject).label}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <p className="text-sm text-center text-gray-500 italic flex items-center justify-center h-full">No mastery data yet</p>
                        )}
                    </Card>
                </div>

                {/* Weekly Analytics */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">Weekly Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Question Accuracy */}
                    <Card className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Correct Questions</h3>
                        {!stats ? (
                            <p>Loading</p>
                        ) : (
                            <div>
                                {/* Total Correct Answers / Total Questions Attempted */}
                                <div className="flex items-end gap-2 mb-4">
                                    <span className="text-5xl font-semibold text-indigo-600">{stats.totalCorrect || 0}</span>
                                    <span className="text-2xl text-gray-700 mb-1">/ {stats.totalAnswered || 0} correct</span>
                                </div>
                                {/* Subject Specific Total Correct Answers / Total Questions Attempted */}
                                <div className="space-y-3 border-t pt-4">
                                    <h4 className="text-sm font-semibold text-gray-800 uppercase">By Subject</h4>
                                    {/* If stats is not null and subjectBreakdown actually contains subjects */}
                                    {stats && Object.entries(stats.subjectBreakdown).length > 0 ? (
                                        // Converts subjectBreakdown into an array then loops through each subject
                                        // Example Entry for Maths: ["maths", {correct: 3, attempted: 3}]
                                        // Destructuring used to seperate the subjectID from the object (data)
                                        Object.entries(stats.subjectBreakdown).map(([subjectID, data]) => {
                                            const theme = getSubjectTheme(subjectID); // Used to get labal and colour
                                            return (
                                                <div key={subjectID} className="flex justify-between items-center text-sm">
                                                    {/* Displays subject */}
                                                    <span style={{ color: theme.primary }} className="font-bold">{theme.label}</span>
                                                    {/* Correct / Attempted for specfic subject */}
                                                    <span className="text-gray-700">{data.correct} / {data.attempted}</span>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <p className="text-sm text-gray-600 italic">No questions completed this week.</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </Card>

                    {/* Question Accuracy (Percentage) */}
                    <Card className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Accuracy</h3>
                        {!stats ? (
                            <p>Loading</p>
                        ) : (
                            <div>
                                {/* Total Correct Answers / Total Questions Attempted as a percentage */}
                                <div className="flex items-end gap-2 mb-4">
                                    <span className="text-5xl font-semibold text-indigo-600">{(stats.totalCorrect != 0 && stats.totalAnswered != 0) ? Number(((stats.totalCorrect / stats.totalAnswered) * 100).toFixed(2)) : 0}</span>
                                    <span className="text-2xl text-gray-700 mb-1">% accuracy</span>
                                </div>
                                {/* Subject Specific Total Correct Answers / Total Questions Attempted as a percentage */}
                                <div className="space-y-3 border-t pt-4">
                                    <h4 className="text-sm font-semibold text-gray-800 uppercase">By Subject</h4>
                                    {/* If stats is not null and subjectBreakdown actually contains subjects */}
                                    {stats && Object.entries(stats.subjectBreakdown).length > 0 ? (
                                        // Converts subjectBreakdown into an array then loops through each subject
                                        // Example Entry for Maths: ["maths", {correct: 3, attempted: 3}]
                                        // Destructuring used to seperate the subjectID from the object (data)
                                        Object.entries(stats.subjectBreakdown).map(([subjectID, data]) => {
                                            const theme = getSubjectTheme(subjectID); // Used to get labal and colour
                                            return (
                                                <div key={subjectID} className="flex justify-between items-center text-sm">
                                                    {/* Displays subject */}
                                                    <span style={{ color: theme.primary }} className="font-bold">{theme.label}</span>
                                                    {/* Correct / Attempted as a percentage for specfic subject */}
                                                    <span className="text-gray-700">{Number(((data.correct / data.attempted) * 100).toFixed(2))}%</span>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <p className="text-sm text-gray-600 italic">No questions completed this week.</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </Card>
                </div>

                {/* Subject Mastery */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Subject Mastery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {stats && Object.entries(stats.masteryBreakdown).length > 0 ? (
                            Object.entries(stats.masteryBreakdown).map(([subjectID, data]) => {
                                const theme = getSubjectTheme(subjectID);
                                const mastery = data.averageMastery;
                                return (
                                    <Card key={subjectID} className="p-4">
                                        {/* Subject Name + Total Unqiue Quizzes Completed */}
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold" style={{ color: theme.primary }}>{theme.label}</span>
                                            <span className="text-sm text-gray-500">{data.totalQuizzes} {data.totalQuizzes === 1 ? 'Quiz' : 'Quizzes'} Total</span>
                                        </div>

                                        {/* Show Progress Bar only if 3 unique quizzes have been completed */}
                                        {data.totalQuizzes >= 3 ? (
                                            <div className="space-y-2">
                                                {/* Progress Bar */}
                                                <div className="bg-gray-200 w-full rounded-full h-4">
                                                    {/* Inner Progress */}
                                                    <div className="h-4 rounded-full" style={{ width: `${mastery}%`, backgroundColor: theme.primary }} />
                                                </div>
                                                {/* Calculation Information + Mastery Percentage */}
                                                <div className="flex justify-between items-center">
                                                    <p className="text-xs text-gray-400">Calculated by Average Best Percentage</p>
                                                    <p className="text-sm font-bold" style={{ color: theme.primary }}>{mastery}% Mastery</p>
                                                </div>
                                            </div>
                                        ) : (
                                            // Message if they have not got enough quizzes completed to show mastery
                                            <div className="bg-gray-100 rounded-lg p-3 text-center border border-dashed border-gray-300">
                                                <p className="text-xs text-gray-500 italic">
                                                    Complete {3 - data.totalQuizzes} more unique {(3 - data.totalQuizzes) === 1 ? 'quiz' : 'quizzes'} in {theme.label} to unlock mastery data
                                                </p>
                                            </div>
                                        )}
                                    </Card>
                                );
                            })
                        ) : (
                            // Message if the student has not done any quizzes
                            <div className="col-span-full bg-gray-100 rounded-lg p-3 text-center border border-dashed border-gray-300">
                                <p className="text-sm text-gray-500 italic">
                                    No mastery data available yet. Have {user.studentName} complete some quizzes to see progress!
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Bottom Navigation */}
            {!isAccountOpen && (
                <BottomNav activePage="parent" />
            )}
        </div>
    )
}

export default ParentDashboard;