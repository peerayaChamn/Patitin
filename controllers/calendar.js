const {
  json
} = require('express');
const calHelpers = require('../util/cal-helpers');

const Event = require('../models/event');

module.exports.showCalendar = (req, res, next) => {
  var now = new Date();
  var year = req.query.year || 1900 + now.getYear();
  var month = req.query.month || now.getMonth();
  var day = req.query.day || now.getDate();
  console.log(`${month}/${day}/${year} (MM/DD/YYYY)`);
  now = new Date(year, month, day)
  var cal = new Date(year, month, 1)
  cal.addDays(-1 * (cal.getDay() + 1))
  let currentDate = new Date(year, month, day);
  let nextDate = addDays(currentDate, 1)

  Event.find({
      $or: [{
        host: {
          _id: req.session.user._id
        },
        datetime: {
          $gte: currentDate,
          $lte: nextDate,
        }

      }, {
        attendees: {
          _id: req.session.user._id
        },
        datetime: {
          $gte: currentDate,
          $lte: nextDate,
        }
      }]
    })
    .then(events => {
      res.render('cal/patitin', {
        title: 'Patitin Calendar',
        searchedValue: '',
        now: now,
        cal: cal,
        events: events,
        path: '/calendar',
      });

    })
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}