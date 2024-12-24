const Progress = require('../models/Progress');

const saveLearningProgress = async (req, res) => {
  const { userId, subject, date, quantity } = req.body;
  
  const progress = new Progress({ userId, subject, date, quantity });
  await progress.save();
  res.status(201).send('Learning progress saved');
};

const getLearningProgress = async (req, res) => {
  const { userId } = req.params;
  const progress = await Progress.find({ userId }).sort({ date: 1 });
  
  res.json(progress);
};

module.exports = { saveLearningProgress, getLearningProgress };
