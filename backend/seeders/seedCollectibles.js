const mongoose = require('mongoose');
const Collectible = require('../models/Collectible');
require('dotenv').config();

const collectibleData = [
  { collectibleID: "robot_figure", name: "Classic Robot", icon: "🤖", rarity: "Common", price: 500 },
  { collectibleID: "wizard_figure", name: "Wizard", icon: "🧙‍♂️", rarity: "Common", price: 500 },
  { collectibleID: "cat_figure", name: "Super Cat", icon: "😼", rarity: "Common", price: 500 },
  { collectibleID: "alien_figure", name: "Alien", icon: "👽", rarity: "Rare", price: 1000 },
  { collectibleID: "ghost_figure", name: "Ghost", icon: "👻", rarity: "Rare", price: 1000 },
  { collectibleID: "dragon_figure", name: "Dragon", icon: "🐉", rarity: "Rare", price: 1000 },
  { collectibleID: "ninja_figure", name: "Ninja", icon: "🥷", rarity: "Epic", price: 1500 },
  { collectibleID: "rockstar_figure", name: "Rockstar", icon: "🎸", rarity: "Epic", price: 1500 },
  { collectibleID: "detective_figure", name: "Detective", icon: "🕵️‍♀️", rarity: "Epic", price: 1500 },
  { collectibleID: "dino_figure", name: "T-Rex", icon: "🦖", rarity: "Legendary", price: 2000 },
  { collectibleID: "astro_figure", name: "Astronaut", icon: "👨‍🚀", rarity: "Legendary", price: 2000 },
  { collectibleID: "superhero_figure", name: "Superhero", icon: "🦸", rarity: "Legendary", price: 2000 },
];

const seedCollectibles = async () => {
  try {
    // Using Mongoose to connect to Atlas using the URI stored in the .env file
    await mongoose.connect(process.env.MONGO_URI);
    // Log a success message to the console once the connection is established
    console.log("Connected to database for seeding");
    // Clear existing collectibles to avoid duplicates every time the script runs
    await Collectible.deleteMany({});
    // Insert the data
    await Collectible.insertMany(collectibleData);
    // Log a success message once all data is safely in the database
    console.log("Database Seeded Successfully!");
    // Terminate
    process.exit();
    // If the try crashes, catch the error
  } catch (error) {
    // Log the specific error to the console to help with debugging
    console.error("Error seeding database:", error);
    // Terminate with error code (1) to indicate a failure
    process.exit(1);
  }
};

seedCollectibles();