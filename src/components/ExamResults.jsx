import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, CircleMinus, Trophy } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const ExamResults = ({ questions, userAnswers, timeTaken }) => {
  const navigate = useNavigate();
  // Calculate score based on all answers
  const score = questions.reduce((totalScore, currentQuestion, qIndex) => 
    userAnswers[qIndex] === currentQuestion.correct_option ? totalScore + 1 : totalScore, 0
  );
  // Calculate total percentage to determine grade
  const percentage = Math.round((score / questions.length) * 100);
  // Determine Grade, not sure about what grades actually look like 
  const getGrade = (p) => {
    if (p >= 80) return { label: "Distinction", color: "text-green-500" };
    if (p >= 65) return { label: "Pass", color: "text-blue-500" };
    return { label: "Try Again", color: "text-red-500" };
  };
  // Grabs Grade achieved along with assosciated colour
  const grade = getGrade(percentage);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Summary Section */}
        <Card className="p-8 mb-8 text-center border-4 border-black shadow-medium">
          <Trophy size={112} className="mx-auto mb-4 text-amber-500" />
          <h1 className="text-4xl font-black uppercase mb-2">Exam Completed!</h1>
          <p className={`text-6xl font-black mb-4 ${grade.color}`}>{percentage}%</p>
          <p className="text-2xl font-bold text-gray-500 mb-6">Grade: {grade.label}</p>
          
          <div className="grid grid-cols-3 gap-4 border-t-2 border-gray-200 pt-6">
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold">Correct</p>
              <p className="text-2xl font-black text-green-500">{score}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold">Incorrect</p>
              <p className="text-2xl font-black text-red-500">{questions.length - score}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold">Time Taken</p>
              <p className="text-2xl font-black text-blue-600">{timeTaken}</p>
            </div>
          </div>
        </Card>

        {/* Detailed Review List Section */}
        <h2 className="text-2xl font-black uppercase mb-4">Question Review</h2>
        <div className="space-y-4">
          {questions.map((q, idx) => {
            const isCorrect = userAnswers[idx] === q.correct_option;
            const isSkipped = userAnswers[idx] === undefined;
            return (
              <div key={idx} className={`p-6 rounded-xl border-2 bg-white ${
                isSkipped ? 'border-l-8 border-amber-400 bg-amber-50' :
                isCorrect ? 'border-l-8 border-green-500' : 'border-l-8 border-red-500'
                }`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xl font-bold text-black">Question {idx + 1}</span>
                  {
                    isSkipped ? <CircleMinus className="text-amber-500" /> :
                    isCorrect ? <CheckCircle className="text-green-500" /> : <XCircle className="text-red-500" />
                  }
                </div>
                <p className="text-lg mb-4">{q.question_text}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-4">
                  <div className={`p-3 rounded-lg border ${
                    isSkipped ? 'bg-amber-50 border-amber-200' :
                    isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}>
                    <p className={`font-bold uppercase text-[10px] ${
                      isSkipped ? 'text-amber-400' :
                      isCorrect ? 'text-green-500' : 'text-red-500'
                      }`}>Your Answer</p>
                    <p className="font-bold">{userAnswers[idx] || "Skipped"}</p>
                  </div>
                  {!isCorrect && (
                    <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                      <p className="font-bold uppercase text-[10px] text-blue-500">Correct Answer</p>
                      <p className="font-bold">{q.correct_option}</p>
                    </div>
                  )}
                </div>

                {/* Explanation */}
                <div className="mt-4 p-4 bg-gray-100 rounded-lg italic text-gray-700 border-l-4 border-gray-300">
                  <span className="font-bold not-italic">Explanation: </span> 
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center pb-12">
           <Button onClick={() => navigate('/sd')} variant="primary" className="px-12 py-4 text-xl">
              Back to Dashboard
           </Button>
        </div>
      </div>
    </div>
  );
};

export default ExamResults;