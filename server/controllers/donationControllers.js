const Donation  = require('../models/Donation.js');
const Campaign  = require('../models/Campaign.js');

//  @desc create new Donation
//  @route  POST /api/donations
//  @access private
//
const createDonation  = async (req, res)  =>  {
  try {
    const { campaignId, amount, paymentMethod } = req.body;

    const campaign  = await Campaign.findById(campaignId);
    if  (!campaign) {
      return  res.status(404).json({  message:  'Kampanye tidak ditemukan'  });
    }

    const donation  = await Donation.create({
      user: req.user._id,
      campaign: campaignId,
      amount,
      paymentMethod
    });

    campaign.currentAmount  +=  Number(amount);
    await campaign.save();

    res.status(201).json({  message:  'Donasi berhasil',  donation  });

  } catch (error) {
    res.status(500).json({  message:  'Gagal membuat donasi', error:  error.message });
  }
};

//  @desc get history user login
//  @route  GET /api/donations/my-donations
//  @access private
//
const getUserDonations  = async (req, res)  =>  {
  try {
    const donations = await Donation.find({ user: req.user._id  })
                                    .populate('campaign', 'title category');
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({  message:  'Gagal mengambil riwayat donasi', error:  error.message });
  }
};

module.exports  = { createDonation, getUserDonations  };
