import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav'; 

const ShelfPage = () => {
  const navigate = useNavigate();

  return (
  <div>
    <h1>Shelf Page</h1>
    <button onClick={() => navigate(-1)}>Go to Previous Page</button>
  
    {/* --- BOTTOM NAVIGATION --- */}
    <BottomNav activePage="shelf"/>
  </div>
  );
};

export default ShelfPage;