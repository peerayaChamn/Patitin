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
      console.log('found events')
      res.render('cal/events', {
        title: 'Patitin Calendar',
        events: events,
        csrfToken: req.csrfToken(),
        path: '/events',
      })
    })
}

module.exports.newEvent = (req, res, next) => {
  const newEvent = new Event({
    title: "Appointment with Instructor",
    description: "You have to meet your instructor to solve the prove assignment",
    datetime: Date.now(),
    host: req.session.user._id
  });
  newEvent.save()
    .then(result => {
      console.log(result);
      return res.redirect('/events');
    })
    .catch(err => console.log(err))
}

module.exports.findEvent = (req, res, next) => {
  console.log('Querying events');
  let query = req.body.query || "test";
  console.log(query);
  Event.find({
      title: {
        $regex: query,
        $options: "i"
      }
    })
    .then(events => {
           res.send({
        events: events
      })
      return events;
    })
}