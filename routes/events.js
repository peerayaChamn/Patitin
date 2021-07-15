const express = require('express');
const router = express.Router();
const eventController = require('../controllers/events');
const isAuth = require('../middleware/is-auth');

router.get('/testEvent', isAuth, eventController.newEvent);
router.post('/find', isAuth, eventController.findEvent);
router.get('/', isAuth, eventController.getEvents);

module.exports = router;
