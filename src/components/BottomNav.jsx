import { useNavigate } from 'react-router-dom';
import { Home, ClipboardList, ShoppingCart, Library, UserCog } from 'lucide-react';
import BottomNavItem from './BottomNavItem';

// "activePage" is a prop to decide which icon lights up
const BottomNav = ({ activePage }) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 pt-3 pb-6 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <BottomNavItem
          label="Home"
          icon={<Home size={36} />}
          active={activePage === 'home'}
          onClick={() => navigate('/sd')}
        />

        <BottomNavItem
          label="Test"
          icon={<ClipboardList size={36} />}
          active={activePage === 'test'}
          onClick={() => navigate("/test")}
        />

        <BottomNavItem
          label="Shop"
          icon={<ShoppingCart size={36} />}
          active={activePage === 'shop'}
          onClick={() => navigate('/shop')}
        />

        <BottomNavItem
          label="My Shelf"
          icon={<Library size={36} />}
          active={activePage === 'shelf'}
          onClick={() => navigate('/shelf')}
        />

        <BottomNavItem
          label="Parent Zone"
          icon={<UserCog size={36} />}
          active={activePage === 'parent'}
          onClick={() => navigate('/parent')}
        />
      </div>
    </nav>
  );
};

export default BottomNav;