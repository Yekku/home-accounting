const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    ref: 'categories',
    type: Schema.Types.ObjectId,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model('events', eventSchema);
