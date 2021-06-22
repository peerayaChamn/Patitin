const {
  json
} = require('express');
const calHelpers = require('../util/cal-helpers');

exports.showCalendar = (req, res, next) => {
   res.render('cal/calendar', {
        pageTitle: 'Calendar Page',
        path: '/calendar'
      });
};

exports.showTest = (req, res, next) => {
  let month = req.query.m || new Date().getMonth();
  let year = req.query.y || new Date().getFullYear();
  let totalDays = calHelpers.daysInMonth(month,year);
  let username = "Demo User"
  res.render("calendar/test", {
    title: 'Calendar Test',
    username: username,
    totalDays: totalDays,
    today: new Date().getDate(),
    path: '/test'
  })
};

exports.getIndex = (req, res, next) => {  
  res.render('home/index', {
    pageTitle: 'Home',
    path: '/'
  });
};

