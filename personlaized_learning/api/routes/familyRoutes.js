const express = require('express');
const router = express.Router();
const { saveFamilyHistory, getFamilyHistory } = require('../controllers/familyController');

// POST route to save family history
router.post('/', saveFamilyHistory);

// GET route to fetch family history
router.get('/:userId', getFamilyHistory);

module.exports = router;
