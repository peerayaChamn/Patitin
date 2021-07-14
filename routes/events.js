const express = require('express');
const router = express.Router();
const eventController = require('../controllers/events');

router.get('/testEvent', eventController.newEvent);
router.post('/find', eventController.findEvent);
router.get('/', eventController.getEvents);

module.exports = router;
