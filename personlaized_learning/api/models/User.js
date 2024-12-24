const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  learningProgress: [{
    subject: String,
    date: Date,
    quantity: Number
  }],
  careerPath: [{
    subject: String,
    recommendedJobs: [String],
    sideIncomeOpportunities: [String]
  }],
  familyHistory: {
    father: {
      university: String,
      certifications: [String]
    },
    mother: {
      university: String,
      certifications: [String]
    }
  }
});

module.exports = mongoose.model('User', userSchema);
