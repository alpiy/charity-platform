const mongoose  = require('mongoose');

const campaignSchema  = new mongoose.Schema({
  title:  {
    type: String,
    required: true  
  },
  description:  {
    type: String,
    required: true
  },
  targetAmount: {
    type: Number,
    required: true
  },
  currentAmount:  {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    enum: ['Education', 'Healthcare', 'Food', 'Environment',  'Animals',  'Disaster Relief'],
    required: true
  },
  organization: {
    //relasi ke user
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User',
    required: true
  },
  status: {
    type: String,
    enum: ['Active',  'Completed',  'Cancelled'],
    default:  'Active'
  }
},  { timestamps: true  });
module.exports  = mongoose.model('Campaign',  campaignSchema);

