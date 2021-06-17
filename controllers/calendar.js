const { json } = require('express');
// const https = require('https');
// const http = require('http');


module.exports.showCalendar = (req, res, next) => {

    res.render('cal/calendar', {
        title: 'Patitin Calendar',
        searchedValue: '',
        path: '/calendar',
    });    
    
    
}
