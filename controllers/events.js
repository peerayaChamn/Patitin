const {
  json
} = require('express');
const Event = require('../models/event')

module.exports.getEvents = (req, res, next) => {
  console.log('Made it to the events page!');
  Event.find({
      $or: [{
        host: {
          _id: req.session.user._id
        }
      }, {
        attendees: {
          _id: req.session.user._id
        }
      }]
    })
    .then(events => {
      console.log(req.session.user._id)
      console.log(events)
      res.render('cal/events', {
        title: 'Patitin Calendar',
        events: events,
        path: '/events',
      })
    })
}
module.exports.newEvent = (req, res, next) => {
  const newEvent = new Event({
    title: "Test Event",
    description: "This is a test event to make sure the event schema is working!",
    datetime: Date.now(),
    host: req.session.user._id
  });
  newEvent.save()
    .then(result => console.log(result))
    .catch(err => console.log(err))
}