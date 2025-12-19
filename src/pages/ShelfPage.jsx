import { useNavigate } from 'react-router-dom';

const ShelfPage = () => {
  const navigate = useNavigate();

  return (
  <div>
    <h1>Shelf Page</h1>
    <button onClick={() => navigate(-1)}>Go to Previous Page</button>
  </div>
  );
};

export default ShelfPage;