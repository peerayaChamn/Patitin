
exports.showCalendar = (req, res, next) => {
   res.render('cal/calendar', {
        pageTitle: 'Calendar Page',
        path: '/calendar'
      });
};

exports.getIndex = (req, res, next) => {  
  res.render('home/index', {
    pageTitle: 'Home',
    path: '/'
  });
};

