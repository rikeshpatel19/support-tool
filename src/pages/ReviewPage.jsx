import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ReviewCard from '../components/ReviewCard';
import { getUser, getSubjects } from '../services/api';
import { getSubjectTheme } from '../constants/subjectThemes';

const ReviewPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    // State to check status of loading
    const [loading, setLoading] = useState(true);
    // State for the error message
    const [errorMessage, setErrorMessage] = useState("");
    // State to store the "today" and "upcoming" sections
    const [reviewSections, setReviewSectons] = useState({ today: [], upcoming: [] });

    const getDaysTillReview = (percentage) => {
        // Score that is lower than 40%: Review in 1 day 
        if (percentage < 40) return 1;
        // Score that is between 40% and 59%: Review in 2 days 
        if (percentage <= 59) return 2;
        // Score that is between 60% and 80%: Review in 3 days 
        if (percentage <= 80) return 3;
        // Score that is higher than 80%: Review in 5 days 
        return 5;
    }

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const storedID = localStorage.getItem("userID");
            const [userResponse, subjectResponse] = await Promise.all([
                getUser(storedID),
                getSubjects()
            ]);

            const userData = userResponse.data;
            const subjectData = subjectResponse.data;

            if (userResponse.error || subjectResponse.error) {
                setErrorMessage(userResponse.error || subjectResponse.error);
                return;
            }
            setUser(userData);

            // Array that will contain all quizzes with their subject IDs
            const allQuizzes = [];
            subjectData.forEach(subject => {
                // Combines topics + challenges for each subject
                const subjectQuizzes = [...subject.topics, ...subject.challenges];
                // Adds the quizzes along with the subject ID to allQuizzes
                subjectQuizzes.forEach(quiz => {
                    allQuizzes.push({ ...quiz, subjectID: subject.subjectID });
                })
            })

            // Array that contains all the quizzes across all the subjects that the user has completed
            const userReviewData = allQuizzes.map(quiz => {
                // Checks if the user has completed the quiz
                const matchingRecord = userData.completedQuizzes.find(q => q.quizID === quiz.id);
                // If a match was found
                if (matchingRecord) {
                    // Quiz along with latestPercentage and completedAt are added
                    return { ...quiz, latestPercentage: matchingRecord.latestPercentage, completedAt: matchingRecord.completedAt };
                }
                return null;
            }).filter(item => item !== null); // Ensures that quizzes that are not done are removed

            const currentDate = new Date();

            // Array that contains the quizzes alogn with their review date and days remaining
            const scheduledQuizzes = userReviewData.map(quiz => {
                const daysTillReview = getDaysTillReview(quiz.latestPercentage);
                const latestCompletion = new Date(quiz.completedAt);
                // Initally set to the date of quiz completion 
                const nextReviewDate = new Date(latestCompletion);
                // Updated using days till review
                nextReviewDate.setDate(nextReviewDate.getDate() + daysTillReview);
                // Used to calculate difference in days, stored in milliseconds
                const timeDifference = nextReviewDate.getTime() - currentDate.getTime();
                // milliseconds to seconds (1000), seconds to minutes (60), minutes to hours (60), hours to days (24)
                // Math.ceil used so if there is 1.2 days left for example, the student will see 2 days
                const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
                // Quiz along with nextReviewDate and daysRemaining are added
                return { ...quiz, nextReviewDate, daysRemaining: daysDifference };
            });

            const todayList = [];
            const upcomingList = [];

            scheduledQuizzes.forEach(quiz => {
                // If the quiz is due today or overdue
                if (quiz.daysRemaining <= 0) {
                    todayList.push(quiz);
                } else {
                    // Quiz is due in the future
                    upcomingList.push(quiz);
                }
            });

            // Sorts upcoming so the quizzes are in order of when they are due
            upcomingList.sort((a, b) => a.daysRemaining - b.daysRemaining);
            setReviewSectons({ today: todayList, upcoming: upcomingList });
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

    if (loading) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-xl">Loading Review...</h2>
                <p className="text-gray-500">Please be patient while the review data loads.</p>
                <span className="text-black underline cursor-pointer hover:text-blue-600" onClick={() => navigate("/sd")}>Return to Student Dashboard</span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans pb-24">
            <Header label="Review" />

            <div className="max-w-4xl mx-auto p-6 space-y-8">
                {/* Section 1: Today's Review */}
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Today's Review</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {console.log(reviewSections.today)}
                        {reviewSections.today.length > 0 ? (
                            reviewSections.today.map((quiz) => (
                                <ReviewCard
                                    key={quiz.id}
                                    name={quiz.name}
                                    theme={getSubjectTheme(quiz.subjectID)}
                                    daysRemaining={quiz.daysRemaining}
                                    onClick={() => navigate(`/quiz/${quiz.subjectID}/${quiz.id}`)}
                                />
                            ))
                        ) : (
                            // Message if they have no quizzes to review today
                            <div className="col-span-full bg-gray-100 rounded-lg p-3 text-center border border-dashed border-gray-300">
                                <p className="text-xs text-gray-500 italic">
                                    You are all caught up for today. Well Done!
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Section 2: Upcoming */}
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {console.log(reviewSections.upcoming)}
                        {reviewSections.upcoming.length > 0 ? (
                            reviewSections.upcoming.map((quiz) => (
                                <ReviewCard
                                    key={quiz.id}
                                    name={quiz.name}
                                    theme={getSubjectTheme(quiz.subjectID)}
                                    daysRemaining={quiz.daysRemaining}
                                    onClick={() => navigate(`/quiz/${quiz.subjectID}/${quiz.id}`)}
                                />
                            ))
                        ) : (
                            // Message if they have no upcoming quizzes to review
                            <div className="col-span-full bg-gray-100 rounded-lg p-3 text-center border border-dashed border-gray-300">
                                <p className="text-xs text-gray-500 italic">
                                    Keep completing Quizzes!
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ReviewPage;