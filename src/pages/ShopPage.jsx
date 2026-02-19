import { useEffect, useState } from 'react';
import { Coins, ShoppingBag, CheckCircle } from 'lucide-react';
import { getUser, getAllCollectibles, purchaseItem } from '../services/api';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Card from '../components/Card';
import Button from '../components/Button';

const ShopPage = () => {
  // State to hold user data
  const [user, setUser] = useState({ points: 0, inventory: [] });
  // State to hold shop items
  const [shopItems, setShopItems] = useState([]);

  // Requires Commenting
  useEffect(() => {
    const loadData = async () => {
      const storedID = localStorage.getItem("userID");
      if (storedID) {
        // Fetch both user data and collectible data
        const [userData, collectiblesData] = await Promise.all([
          getUser(storedID),
          getAllCollectibles()
        ]);
        // Store the items from MongoDB
        setUser(userData);
        setShopItems(collectiblesData); 
      }
    };
    loadData();
  }, []);
  
  // Requires Commenting
  const handlePurchase = async (item) => {
    const storedID = localStorage.getItem("userID");
    const price = item.price; 
    if (user.points < price) {
      alert("You need more points! Try doing more quizzes.");
      return;
    }
    const data = await purchaseItem(storedID, item.id, price);
    if (data.message === "Purchase successful!") {
      // Update local state so the UI changes instantly
      setUser({
        ...user,
        points: data.updatedPoints,
        inventory: data.inventory
      });
    }
  };

  return (
    <div className="min-h-screen bg-sky-50 pb-32">
      {/* Header */}
      <Header label="THE SHOP" points={user.points.toLocaleString()} />

      <div className="max-w-4xl mx-auto p-6">
        {/* Banner Section */}
        <div className="mb-8 bg-purple-500 border-4 border-black rounded-3xl p-6 text-white shadow-medium flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black">NEW ARRIVALS!</h2>
            <p className="font-medium opacity-90">Spend your hard-earned coins on cool figures.</p>
          </div>
          <ShoppingBag size={48} className="opacity-50" />
        </div>
        {/* Responsive Grid Layout: 2 columns on mobile, 3 on medium screens and up */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Map through the collection of all items to generate item cards */}
          {shopItems.map((item) => {
            // Check if item is already owned
            const isPurchased = user.inventory?.includes(item.id);

            return (
              // Individual Card component for each collectible
              <Card
                key={item.id}
                className={`flex flex-col items-center justify-between text-center group transition-all duration-300 ${isPurchased ? 'opacity-60 grayscale-[0.5]' : ''}`}
              >
                {/* Item Icon Container */}
                <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-4 transition-colors ${isPurchased ? 'bg-gray-200 border-gray-400' : 'bg-gray-100 border-2 border-gray-300'}`}>
                  {/* Item Icon */}
                  <span className="w-full h-auto text-4xl">{item.icon}</span>
                </div>

                {/* Item Details */}
                <div className="mb-4">
                  <h3 className="font-black text-lg uppercase leading-tight">{item.name.replace('_', ' ')}</h3>
                  <p className="text-xs text-gray-500 font-bold">
                    {isPurchased ? 'IN COLLECTION' : 'LIMITED EDITION'}
                  </p>
                </div>

                {/* Purchased / Purchase Button */}
                <Button
                  variant={"primary"}
                  // Apply green background if available, show "not-allowed" cursor if purchased
                  className={`w-full ${!isPurchased ? 'bg-green-500 hover:bg-green-600' : 'cursor-not-allowed'}`}
                  // Disable the button entirely if the item is already purchased
                  disabled={isPurchased}
                  // Handles Purchase
                  onClick={() => !isPurchased && handlePurchase(item)}
                >
                  {/* Purchased (Checkmark) vs Purchase (Price) */}
                  {isPurchased ? (
                    <>
                      <CheckCircle size={16} />
                      <span>Purchased</span>
                    </>
                  ) : (
                    <>
                      <Coins size={16} />
                      <span>500</span>
                    </>
                  )}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
      {/* --- BOTTOM NAVIGATION --- */}
      <BottomNav activePage="shop" />
    </div>
  );
};

export default ShopPage;