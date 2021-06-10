
const express = require('express');
const router = express.Router();

const calendarController = require('../controllers/calendar');
router.get('/test', calendarController.getTest);

module.exports = router