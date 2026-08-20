const express = require('express');
const router  = express.Router();
const { createDonation, getUserDonations  } = require('../controllers/donationControllers.js');
const { protect } = require('../middleware/authMiddleware.js');

router.post('/',  protect,  createDonation);
router.get('/my-donations', protect,  getUserDonations);

module.exports  = router;
