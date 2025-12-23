import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav'; 

const ShopPage = () => {
  const navigate = useNavigate();

  return (
  <div>
    <h1>Shop Page</h1>
    <button onClick={() => navigate(-1)}>Go to Previous Page</button>
  
    {/* --- BOTTOM NAVIGATION --- */}
    <BottomNav activePage="shop"/>
  </div>
  );
};

export default ShopPage;