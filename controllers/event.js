const Event = require('../models/Event')
const errorHandler = require('../utils/errorHandler')

// (get) localhost:5000/api/event?offset=2&limit=5
module.exports.getAll = async function(req, res) {
  try {
    const events = await Event.find({ user: req.user.id });
    res.status(200).json(events);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.getById = async function(req, res) {
  try {
    const event = await Event.findById(req.params.id);
    res.status(200).json(event);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.create = async function(req, res) {
  try {
    const event = await new Event({
      type: req.body.type,
      amount: req.body.amount,
      category: req.body.category,
      description: req.body.description,
      user: req.user.id
    }).save();
    res.status(201).json(event);
  } catch (e) {
    errorHandler(res, e);
  }
};
