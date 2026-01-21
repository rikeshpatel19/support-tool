import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { getUser, ALL_COLLECTIBLES } from '../services/api';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const ShelfPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const userData = await getUser();
      setUser(userData);
    };
    loadData();
  }, []);

  if (!user) return <div className="p-10 text-center font-bold">Loading Shelf...</div>;

  // Split the 12 items into chunks of 3 (for 4 shelves)
  const shelves = [];
  for (let i = 0; i < ALL_COLLECTIBLES.length; i += 3) {
    shelves.push(ALL_COLLECTIBLES.slice(i, i + 3));
  }
  return (
    <div className="min-h-screen bg-white font-sans pb-24">

      {/* Header */}
      <Header label="My Shelf" />

      <div className="max-w-4xl mx-auto p-6 space-y-12 mt-4">

        {/* Render each Shelf (Row) */}
        {shelves.map((shelfItems, index) => (
          <div key={index} className="relative">

            {/* The Figures Row */}
            <div className="flex justify-around items-end px-4 mb-[-4px] relative z-10">
              {shelfItems.map((item) => {
                const isUnlocked = user.inventory.includes(item.id);

                return (
                  <div key={item.id} className="flex flex-col items-center gap-2 w-24">

                    {/* The Slot Box */}
                    <div className={`
                      h-24 w-20 rounded-t-xl flex items-center justify-center text-4xl transition-all
                      ${isUnlocked
                        ? "bg-white border-2 border-black border-b-0 -mb-1 pb-1 drop-shadow-md"
                        : "border-2 border-dashed border-gray-400 bg-transparent opacity-50"
                      }
                    `}>
                      {isUnlocked ? item.icon : <Lock size={24} className="text-gray-400" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* The Shelf Graphic (Hatched Pattern) */}
            <div
              className="h-8 w-full border-2 border-black rounded-lg shadow-hard relative z-0"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 5px, #d1d5db 5px, #d1d5db 10px)"
              }}
            />

          </div>
        ))}
      </div>

      {/* --- BOTTOM NAVIGATION --- */}
      <BottomNav activePage="shelf" />
    </div>
  );
};

export default ShelfPage;