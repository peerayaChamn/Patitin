const express = require('express');
const router = express.Router();
const CalendarController = require('../controllers/calendar');


router.get('/',CalendarController.showCalendar);

module.exports = router;
