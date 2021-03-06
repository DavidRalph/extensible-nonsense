const engine = require('../services/engine');
const express = require('express');
const router = express.Router();

router.get('/', engine.getFromRandomBranch);
router.post('/', engine.postToBranch);

router.get('/all', engine.getAllBranches);
router.delete('/', engine.reset);

module.exports = router;