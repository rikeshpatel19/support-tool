const Collectible = require('../models/Collectible');
const asyncHandler = require('express-async-handler');

// @desc Get all collectibles
// @route GET /collectibles
const getAllCollectibles = asyncHandler(async (request, response) => {
    const collectibles = await Collectible.find();
    response.json(collectibles);
});

// @desc Get one specific collectible
// @route GET /collectibles/:id
const getCollectible = asyncHandler(async (request, response) => {
    const collectible = await Collectible.findOne({ id: request.params.id });
    response.json(collectible);
});

module.exports = {
    getCollectible,
    getAllCollectibles
}