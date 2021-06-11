const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const sassMiddleware = require('node-sass-middleware')

const authRoutes = require('./routes/auth');
const calendarRoutes = require('./routes/calendar');


express()
  .use('/auth', authRoutes)
  .use('/calendar', calendarRoutes)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(
    sassMiddleware({
      src: __dirname + '/public/scss'
      , dest: __dirname + '/public/css'
      // , debug: true
      , outputStyle: 'compressed'
    })
  )
  .use((req, res, next) => {
    res.locals.title = '';
    next();
  })
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.render('pages/index'))
  .get('/scss', (req, res) => res.render('pages/scss-101',{title:'SCSS 101'}))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
