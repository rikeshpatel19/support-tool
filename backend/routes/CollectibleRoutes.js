const express = require('express');
const router = express.Router();
const { getCollectible, getCollectibles } = require('../controllers/collectiblesController');

router.route('/').get(getCollectibles);
router.route('/:id').get(getCollectible);

module.exports = router;