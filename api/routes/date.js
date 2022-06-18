const express = require('express');
const router = express.Router();
const { test, getDates } = require('../controllers/dateCtrl');

router.get('/test', test);
router.post('/', getDates)

module.exports = router;