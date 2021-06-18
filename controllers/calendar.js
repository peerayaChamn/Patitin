const {
  json
} = require('express');
const calHelpers = require('../util/cal-helpers');
// const https = require('https');
// const http = require('http');


module.exports.showCalendar = (req, res, next) => {

  res.render('cal/calendar', {
    title: 'Patitin Calendar',
    searchedValue: '',
    path: '/calendar',
  });


}

module.exports.getTest = (req, res, next) => {
  let month = req.query.m || new Date().getMonth();
  let year = req.query.y || new Date().getFullYear();
  let totalDays = calHelpers.daysInMonth(month,year);
  let username = "Demo User"
  res.render("calendar/test", {
    title: 'Calendar Test',
    username: username,
    totalDays: totalDays,
    today: new Date().getDate()
  })
}