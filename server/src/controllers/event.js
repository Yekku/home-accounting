const Event = require('../models/Event');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function (req, res) {
  try {
    const events = await Event.find({ user: req.user._id });
    res.status(200).json(events);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.getById = async function (req, res) {
  try {
    const event = await Event.findOne({ _id: req.params.id, user: req.user._id });
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.create = async function (req, res) {
  try {
    const event = await new Event({
      type: req.body.type,
      amount: req.body.amount,
      category: req.body.category,
      description: req.body.description,
      user: req.user._id,
    }).save();
    res.status(201).json(event);
  } catch (e) {
    errorHandler(res, e);
  }
};
