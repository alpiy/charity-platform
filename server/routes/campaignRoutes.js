const express = require('express');
const router  = express.Router();
const { getCampaigns, getCampaignById,  createCampaign  } = require('../controllers/campaignControllers.js');
const { protect,  authorize } = require('../middleware/authMiddleware');

router.route('/')
  .get(getCampaigns)
  .post(protect,  authorize('charity_org',  'admin'), createCampaign);

router.route('/:id')
  .get(getCampaignById);

module.exports  = router;
