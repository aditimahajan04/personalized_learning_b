const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: String, required: true },
  recommendedJobs: [String],
  sideIncomeOpportunities: [String]
});

module.exports = mongoose.model('Career', careerSchema);
