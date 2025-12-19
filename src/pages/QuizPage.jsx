import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate();

  return (
  <div>
    <h1>Quiz Page</h1>
    <button onClick={() => navigate(-1)}>Go to Previous Page</button>
  </div>
  );
};

export default QuizPage;