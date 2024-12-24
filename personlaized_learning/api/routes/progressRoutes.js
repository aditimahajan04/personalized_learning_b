const express = require('express');
const router = express.Router();
const { saveLearningProgress, getLearningProgress } = require('../controllers/progressController');

// Route to save learning progress
router.post('/', (req, res, next) => {
  console.log('POST /api/progress triggered');
  next();
}, saveLearningProgress);

// Route to get learning progress
router.get('/:userId', (req, res, next) => {
  console.log(`GET /api/progress/${req.params.userId} triggered`);
  next();
}, getLearningProgress);

module.exports = router;
