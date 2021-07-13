const path = require('path');
const express = require('express');


const homeController = require('../controllers/home');
const calendarController = require('../controllers/calendar');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/', homeController.getIndex);
router.get('/calendar', calendarController.showCalendar);

module.exports = router;
