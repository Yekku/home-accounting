const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const config = require('./config');

const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const eventRoutes = require('./routes/event');
const billRoutes = require('./routes/bill');

const app = express();

mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB connected.'))
  .catch(error => console.error('MongoDB connection error:', error));

app.use(helmet());
app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(require('morgan')('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('cors')());

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { message: 'Too many requests, please try again later.' },
});

app.use('/api/auth', authLimiter, authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bills', billRoutes);

module.exports = app;
