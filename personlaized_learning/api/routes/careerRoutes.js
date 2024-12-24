const express = require('express');
const router = express.Router();
const { saveCareerPath, getCareerPath } = require('../controllers/careerController');

router.post('/', saveCareerPath);
router.get('/:userId', getCareerPath);

module.exports = router;
