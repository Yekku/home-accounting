const Bill = require('../models/Bill');
const errorHandler = require('../utils/errorHandler');

module.exports.get = async function (req, res) {
  try {
    const bill = await Bill.findOne({ user: req.user._id });
    if (!bill) {
      return res.status(404).json({ message: 'Bill not found' });
    }
    res.status(200).json(bill.toObject());
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.create = async function (req, res) {
  try {
    const bill = await new Bill({
      value: req.body.value,
      currency: req.body.currency,
      user: req.user._id,
    }).save();
    res.status(201).json(bill);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.update = async function (req, res) {
  try {
    const bill = await Bill.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { $set: { value: req.body.value, currency: req.body.currency } },
      { new: true }
    );
    if (!bill) {
      return res.status(404).json({ message: 'Bill not found' });
    }
    res.status(200).json(bill);
  } catch (e) {
    errorHandler(res, e);
  }
};
