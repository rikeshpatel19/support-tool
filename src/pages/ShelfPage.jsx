import { useEffect, useState } from 'react';
import { Lock } from 'lucide-react';
import { getUser, ALL_COLLECTIBLES } from '../services/api';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const ShelfPage = () => {
  // State to hold user data
  const [user, setUser] = useState(null);
  // Call API to get user data
  // useEffect(() => {
  //   const loadData = async () => {
  //     const userData = await getUser();
  //     setUser(userData);
  //   };
  //   loadData();
  // }, []); // The empty array ensures this only runs once

  // Requires Commenting
  useEffect(() => {
  const loadData = async () => {
    const storedId = localStorage.getItem("userID");
    
    if (storedId) {
      const userData = await getUser(storedId);
      setUser(userData); // This will now contain the real inventory from Atlas
    }
  };
  loadData();
}, []); // The empty array ensures this only runs once

  // If user data hasn't loaded yet, display a simple loading message
  if (!user) return <div className="p-10 text-center font-bold">Loading Shelf...</div>;

  // Split the 12 items into chunks of 3 (for 4 shelves)
  const shelves = [];
  for (let i = 0; i < ALL_COLLECTIBLES.length; i += 3) {
    // Create a "shelf" by slicing out 3 items and pushing them to the shelves array
    shelves.push(ALL_COLLECTIBLES.slice(i, i + 3));
  }
  return (
    <div className="min-h-screen bg-white font-sans pb-24">

      {/* Header */}
      <Header label="My Shelf" />

      <div className="max-w-4xl mx-auto p-6 space-y-12 mt-4">

        {/* Render each Shelf (Row) */}
        {shelves.map((shelfItems, index) => (
          // Container for a single shelf row
          <div key={index} className="relative">
            {/* Container for the figures/icons placed on top of the shelf */}
            <div className="flex justify-around items-end px-4 mb-1 relative z-10">
              {shelfItems.map((item) => {
                // Check if the current item's ID exists in the user's inventory
                const isUnlocked = user.inventory.includes(item.id);

                return (
                  // Individual item slot container
                  <div key={item.id} className="flex flex-col items-center gap-2 w-24">

                    {/* The Slot Box */}
                    <div className={`h-24 w-20 border-2 rounded-t-xl -mb-1 flex items-center justify-center text-4xl transition-all
                      ${isUnlocked
                        ? "bg-white border-black border-b-0 pb-1 drop-shadow-md"
                        : "border-b-0 border-dashed border-gray-400 opacity-50"
                      }
                    `}>
                      {/* Show the item icon if unlocked, otherwise show the Lock icon */}
                      {isUnlocked ? item.icon : <Lock size={24} className="text-gray-400" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* The Shelf Graphic (Hatched Pattern) */}
            <div
              className="h-8 w-full border-2 border-black rounded-lg shadow-medium relative z-0"
              style={{
                // Inline style to create the diagonal line effect for the shelf texture
                backgroundImage: "repeating-linear-gradient(-45deg, #e5e7eb, #e5e7eb 5px, #d1d5db 5px, #d1d5db 10px)"
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