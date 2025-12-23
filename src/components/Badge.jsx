import { Hexagon } from 'lucide-react';

const Badge = ({ tier = 'none', size = 32 }) => {
  
  // Define the styles for each tier
  const styles = {
    gold: {
      color: "text-black",
      fill: "fill-yellow-400",
      strokeWidth: 1.5
    },
    silver: {
      color: "text-black",
      fill: "fill-gray-300",
      strokeWidth: 1.5
    },
    bronze: {
      color: "text-black",
      fill: "fill-amber-700",
      strokeWidth: 1.5
    },
    none: {
      color: "text-gray-300", // Light gray outline
      fill: "fill-transparent", // See-through
      isDashed: true
    }
  };

  const currentStyle = styles[tier] || styles.none;

  return (
    <div className={`${currentStyle.color}`}>
      <Hexagon 
        size={size} 
        className={currentStyle.fill} 
        strokeWidth={currentStyle.strokeWidth}
        strokeDasharray={currentStyle.isDashed ? "5 5" : "0"} 
        strokeLinecap="round"
      />
    </div>
  );
};

export default Badge;