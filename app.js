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

mongoose.connect(keys.mongoURI,
  {
    useFindAndModify: false,
    useNewUrlParser: true
  }
)
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
  app.use(express.static(__dirname + '/client/dist'));
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
  });
}

module.exports = app