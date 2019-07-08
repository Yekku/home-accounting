const mongoose = require('mongoose')
const Schema = mongoose.Schema

const billSchema = new Schema({
  value: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId,
  }
});

module.exports = mongoose.model('bills', billSchema)