const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  father: {
    university: { type: String, required: true },
    certifications: [String],
  },
  mother: {
    university: { type: String, required: true },
    certifications: [String],
  },
});

module.exports = mongoose.model('Family', familySchema);
