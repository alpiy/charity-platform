const Campaign  = require('../models/Campaign');

//  @desc get all Campaign
//  @route  GET /api/campaigns
//  @access public
//
const getCampaigns  = async (req, res)  =>  {
  try {
    const campaigns = await Campaign.find().populate('organization',  'name email');
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({  message:  'Gagal mengambil data kampanye',  error:  error.message});
  }
};

//  @desc get details one campaigns where ID  
//  @route  GET /api/campaigns/:id  
//  @access public
//
const getCampaignById  = async (req, res)  =>  {
  try {
    const campaign  = await Campaign.findById(req.params.id).populate('organization', 'name email');

    if  (campaign)  {
      res.status(200).json(campaign);
    } else  {
      res.status(404).json({  message:  'Kampanye tidak ditemukan'  });
    }
  } catch (error) {
    res.status(500).json({  message:  'Terjadi kesalahan server', error:  error.message });
  }
};

//  @desc create new campaigns
//  @route  POST  /api/campaigns
//  @access private only admin and charity_org
//
const createCampaign =  async (req, res)  =>  {
  try {
    const { title,  description,  targetAmount, category  } =  req.body;

    const campaign  = await Campaign.create({
      title,
      description,
      targetAmount,
      category,
      organization: req.user._id
    });

    res.status(201).json(campaign);
  }   catch (error) {
    res.status(500).json({  message:  'Gagal membuat kampanye', error:  error.message });
  }
};

module.exports  = { getCampaigns, getCampaignById, createCampaign  };
