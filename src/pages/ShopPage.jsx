import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CirclePoundSterling, ShoppingBag, CheckCircle } from 'lucide-react';
import { getUser, getCollectibles, purchaseItem } from '../services/api';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Card from '../components/Card';
import Button from '../components/Button';

const ShopPage = () => {
  const navigate = useNavigate();
  // State to hold user data
  const [user, setUser] = useState({ points: 0, inventory: [] });
  // State to check status of loading
  const [loading, setLoading] = useState(true);
  // State for the error message
  const [errorMessage, setErrorMessage] = useState("");
  // State to hold shop items
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const storedID = localStorage.getItem("userID");
      if (storedID) {
        // Fetch both user data and collectible data
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
        // Store the items from MongoDB
        setUser(userData);
        setShopItems(collectiblesData);
        setLoading(false);
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
    const purchaseResponse = await purchaseItem(storedID, item.collectibleID, price);
    const data = purchaseResponse.data;
    if (data.message === "Purchase successful!") {
      // Update local state so the UI changes instantly
      setUser({
        ...user,
        points: data.updatedPoints,
        inventory: data.inventory
      });
    }
  };

  // Determine the text colour based on the rarity of the item
  const getTextStyle = (rarity) => {
    console.log(rarity);
    // Common: Grey
    if (rarity == "Common") return "text-gray-600";
    // Rare: Blue
    if (rarity == "Rare") return "text-blue-500";
    // Epic: Purple
    if (rarity == "Epic") return "text-purple-600";
    // Legendary: Gold
    if (rarity == "Legendary") return "text-amber-500";
    return "";
  };

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
  if (loading || !user || shopItems.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl">Loading Shop...</h2>
        <p className="text-gray-500">Please be patient while the shop loads.</p>
        <span className="text-black underline cursor-pointer hover:text-blue-600" onClick={() => navigate("/sd")}>Return to Student Dashboard</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header */}
      <Header label="THE SHOP" points={user.points.toLocaleString()} />
      <div className="max-w-4xl mx-auto p-6">
        {/* Banner Section */}
        <div className="mb-8 bg-purple-300 border-4 border-black rounded-3xl p-6 text-black shadow-medium flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black">AWESOME FIGURES TO ADD TO YOUR COLLECTION!</h2>
            <p className="font-medium opacity-90">Spend your hard-earned coins on cool figures.</p>
          </div>
          <ShoppingBag size={48} className="opacity-50" />
        </div>
        {/* Responsive Grid Layout: 2 columns on mobile, 3 on medium screens and up */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Map through the collection of all items to generate item cards */}
          {shopItems.map((item) => {
            // Check if item is already owned
            const isPurchased = user.inventory?.includes(item.collectibleID);

            return (
              // Individual Card component for each collectible
              <Card
                key={item.collectibleID}
                className={`flex flex-col items-center justify-between text-center ${isPurchased ? 'opacity-60 grayscale-75' : ''}`}
              >
                {/* Item Icon Container */}
                <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-4 transition-colors ${isPurchased ? 'bg-gray-200 border-gray-400' : 'bg-gray-100 border-2 border-gray-300'}`}>
                  {/* Item Icon */}
                  <span className="w-full h-auto text-4xl">{item.icon}</span>
                </div>

                {/* Item Details */}
                <div className="mb-4">
                  <h3 className="font-black text-lg uppercase leading-tight">{item.name}</h3>
                  <p className={`text-xs font-bold uppercase ${isPurchased ? "text-gray-500" : getTextStyle(item.rarity)}`}>
                    {isPurchased ? 'In Collection' : item.rarity}
                  </p>
                </div>

                {/* Purchased / Purchase Button */}
                <Button
                  variant="grey"
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
                      <CirclePoundSterling size={16} />
                      <span>{item.price}</span>
                    </>
                  )}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
      {/* Bottom Navigation */}
      <BottomNav activePage="shop" />
    </div>
  );
};

export default ShopPage;