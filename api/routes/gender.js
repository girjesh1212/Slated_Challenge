const express = require('express');
const router = express.Router();
const { test, getGender } = require('../controllers/genderCtrl');

router.get('/test', test);
router.post('/', getGender)

module.exports = router;