const {
  json
} = require('express');
const calHelpers = require('../util/cal-helpers');

exports.getIndex = (req, res, next) => {  
  res.render('home/index', {
    pageTitle: 'Home',
    path: '/'
  });
};

