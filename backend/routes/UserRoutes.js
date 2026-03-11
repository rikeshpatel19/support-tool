const express = require('express');
const router = express.Router();
const {getUser, deleteUser, loginUser, registerUser, updateProfile, completeQuiz, purchaseItem} = require('../controllers/usersController');

router.route('/:id').get(getUser) .delete(deleteUser);

router.route('/login').post(loginUser);
router.route('/register').post(registerUser);

router.route('/:id/update-profile').patch(updateProfile);
router.route('/:id/complete-quiz').post(completeQuiz);
router.route('/:id/purchase').post(purchaseItem);

module.exports = router;