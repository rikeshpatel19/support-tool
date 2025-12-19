import { useParams, useNavigate } from 'react-router-dom';

const SubjectPage = () => {
  const { subjectId } = useParams(); // Reads from the URL
  const navigate = useNavigate();

  // Lookup table to convert from id to cleaner name
  const subjectTitles = {
    maths: "Maths",
    english: "English",
    verbal_reasoning: "Verbal Reasoning",
    non_verbal_reasoning: "Non-Verbal Reasoning"
  };

  // Retrieve from lookup table or use the rawID if missing
  const displayTitle = subjectTitles[subjectId] || subjectId;

  return (
  <div>
    <h1>{displayTitle} Page</h1>
    <button onClick={() => navigate(-1)}>Go to Previous Page</button>
  </div>
  );
};

export default SubjectPage;