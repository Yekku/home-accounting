const mongoose = require('mongoose')
const Schema = mongoose.Schema

const billSchema = new Schema({
  value: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('bills', billSchema)