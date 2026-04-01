import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { getUser, getCollectibles } from '../services/api';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const ShelfPage = () => {
  const navigate = useNavigate();
  // State to hold user data
  const [user, setUser] = useState(null);
  // State to check status of loading
  const [loading, setLoading] = useState(true);
  // State for the error message
  const [errorMessage, setErrorMessage] = useState("");
  // State to hold all collectibles
  const [allCollectibles, setAllCollectibles] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const storedID = localStorage.getItem("userID");
      if (storedID) {
        const [userResponse, collectiblesResponse] = await Promise.all([
          getUser(storedID),
          getCollectibles()
        ]);

        const userData = userResponse.data;
        const collectiblesData = collectiblesResponse.data;

        if (userResponse.error || collectiblesResponse.error) {
          setErrorMessage(userResponse.error || collectiblesResponse.error);
          return;
        }
        setUser(userData);
        setAllCollectibles(collectiblesData);
      }
      setLoading(false);
    };
    loadData();
  }, []); // The empty array ensures this only runs once

  // Split the 12 items into chunks of 3 (for 4 shelves)
  const shelves = [];
  for (let i = 0; i < allCollectibles.length; i += 3) {
    // Create a "shelf" by slicing out 3 items and pushing them to the shelves array
    shelves.push(allCollectibles.slice(i, i + 3));
  }

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

  // If user data or collectibles have not loaded yet, display a simple loading message
  if (loading || !user || allCollectibles.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl">Loading Shelf...</h2>
        <p className="text-gray-500">Please be patient while the shelves load.</p>
        <span className="text-black underline cursor-pointer hover:text-blue-600" onClick={() => navigate("/sd")}>Return to Student Dashboard</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-24">
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
                const isUnlocked = user.inventory.includes(item.collectibleID);

                return (
                  // Individual item slot container
                  <div key={item.collectibleID} className="flex flex-col items-center gap-2 w-24">

                    {/* The Slot Box */}
                    <div className={`h-24 w-20 border-2 border-b-0 rounded-t-xl -mb-1 flex items-center justify-center text-4xl
                      ${isUnlocked
                        ? "bg-white border-black pb-1 drop-shadow-lg"
                        : "border-dashed border-gray-400 opacity-50"
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
      {/* Bottom Navigation */}
      <BottomNav activePage="shelf" />
    </div>
  );
};

export default ShelfPage;