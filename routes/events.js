const express = require('express');
const router = express.Router();
const eventController = require('../controllers/events');

router.get('/', eventController.getEvents);
router.get('/testEvent', eventController.newEvent);

module.exports = router;
