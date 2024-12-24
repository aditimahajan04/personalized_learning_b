const Family = require('../models/Family');

// Save Family Data
const saveFamilyHistory = async (req, res) => {
  try {
    const { userId, father, mother } = req.body;
    if (!userId || !father || !mother) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const family = new Family({ userId, father, mother });
    await family.save();
    res.status(201).json({ message: 'Family history saved successfully' });
  } catch (error) {
    console.error('Error saving family history:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Fetch Family Data
const getFamilyHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const family = await Family.findOne({ userId });
    res.status(200).json(family);
  } catch (error) {
    console.error('Error fetching family history:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { saveFamilyHistory, getFamilyHistory };
