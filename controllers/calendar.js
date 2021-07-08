const {
  json
} = require('express');
const calHelpers = require('../util/cal-helpers');
// const https = require('https');
// const http = require('http');


module.exports.showCalendar = (req, res, next) => {
  var now = new Date()
  console.log('year', req.query.year, 'month', req.query.month, 'day', req.query.day)
  var year = req.query.year || 1900 + now.getYear()
  var month = req.query.month || now.getMonth()
  var day = req.query.day || now.getDate() 
  now = new Date( year, month, day )
  var cal = new Date( year, month, 1)
  cal.addDays(-1 * ( cal.getDay()+1 ) )
  res.render('cal/patitin', {
    title: 'Patitin Calendar',
    searchedValue: '',
    now: now,
    cal: cal,
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