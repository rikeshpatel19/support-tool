const mongoose = require('mongoose');
const Collectible = require('./models/Collectible');
require('dotenv').config();

const collectibleData = [
  { id: "robot_figure", name: "Classic Robot", icon: "🤖" },
  { id: "wizard_figure", name: "Wizard", icon: "🧙‍♂️" },
  { id: "cat_figure", name: "Super Cat", icon: "😼" },
  { id: "alien_figure", name: "Alien", icon: "👽" },
  { id: "ghost_figure", name: "Ghost", icon: "👻" },
  { id: "dragon_figure", name: "Dragon", icon: "🐉" },
  { id: "ninja_figure", name: "Ninja", icon: "🥷" },
  { id: "rockstar_figure", name: "Rockstar", icon: "🎸" },
  { id: "detective_figure", name: "Detective", icon: "🕵️‍♀️" },
  { id: "dino_figure", name: "T-Rex", icon: "🦖" },
  { id: "astro_figure", name: "Astronaut", icon: "👨‍🚀" },
  { id: "superhero_figure", name: "Superhero", icon: "🦸" },
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