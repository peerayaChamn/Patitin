const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const authRoutes = require('./routes/auth')
const calendarRoutes = require('./routes/calendar')


express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/auth', authRoutes)
  .use('/calendar', calendarRoutes)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/scss', (req, res) => res.render('pages/scss-101'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
