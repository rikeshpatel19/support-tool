const express = require('express');
const router = express.Router();
const { getCollectible, getAllCollectibles } = require('../controllers/collectiblesController');

router.route('/').get(getAllCollectibles);
router.route('/:id').get(getCollectible);

module.exports = router;