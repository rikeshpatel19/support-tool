const express = require('express');
const router = express.Router();
const Collectible = require('../models/Collectible');

// Get all collectibles
router.get('/', async (request, response) => {
  const collectibles = await Collectible.find();
  response.json(collectibles);
});

// Get one specific collectible
router.get('/:id', async (request, response) => {
  const collectible = await Collectible.findOne({ id: request.params.id });
  response.json(collectible);
});

module.exports = router;