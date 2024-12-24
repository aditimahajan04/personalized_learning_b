const Career = require('../models/Career');

// Save Career Data
const saveCareerPath = async (req, res) => {
  try {
    const { userId, subject, recommendedJobs, sideIncomeOpportunities } = req.body;
    const career = new Career({ userId, subject, recommendedJobs, sideIncomeOpportunities });
    await career.save();
    res.status(201).json({ message: 'Career path saved successfully' });
  } catch (error) {
    console.error('Error saving career path:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Fetch Career Data
const getCareerPath = async (req, res) => {
  try {
    const { userId } = req.params;
    const career = await Career.find({ userId });
    res.status(200).json(career);
  } catch (error) {
    console.error('Error fetching career path:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { saveCareerPath, getCareerPath };
