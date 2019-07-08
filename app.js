const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const eventRoutes = require('./routes/event')
const billRoutes = require('./routes/bill')
const keys = require('./config/keys')
const app = express()

const opt = { useNewUrlParser: true };
mongoose.connect(keys.mongoURI, opt)
  .then(() => console.log('MongoDB connected.'))
  .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/', authRoutes)
app.use('/categories', categoryRoutes)
app.use('/events', eventRoutes)
app.use('/bills', billRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist'))
}

module.exports = app