const mongoose = require('mongoose');

const CollectibleSchema = new mongoose.Schema({
  // Unique ID for each collectible
  collectibleID: { type: String, required: true, unique: true },
  // Display name for each collectible
  name: { type: String, required: true },
  // Icon for each collectible
  icon: { type: String, required: true },
  // Rarity for each collectible
  rarity: { type: String, required: true },
  // Price for each collectible
  price: { type: Number, required: true, default: 500 }
});

module.exports = mongoose.model('Collectible', CollectibleSchema);