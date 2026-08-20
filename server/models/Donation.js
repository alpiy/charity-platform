const mongoose  = require('mongoose');

const donationSchema  = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User',
    required: true  
  },
  campaign: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'Campaign',
    required: true  
  },
  amount: {
    type: Number,
    required: true  
  },
  paymentMethod:  {
    type: String,
    enum: ['Bank Transfer', 'Credit Card',  'E-Wallet'],
    default:  'Bank Transfer'
  },
  paymentStatus:  {
    type: String,
    enum: ['Pending', 'Completed',  'Failed'],
    default:  'Completed'
  }
},{ timestamps: true  });

module.exports  = mongoose.model('Donation',  donationSchema);
