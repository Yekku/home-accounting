const Bill = require('../models/Bill')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function(req, res) {
  try {
    const bills = await Bill.find({ user: req.user.id });
    res.status(200).json(bills);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.create = async function(req, res) {
  try {
    const bill = await new Bill({
      value: req.body.value,
      currency: req.body.currency
    }).save()
    res.status(201).json(bill)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async function(req, res) {
  const updated = {
    value: req.body.value,
    currency: req.body.curency,
  };

  try {
    const bill = await Bill.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updated },
      { new: true },
    );
    res.status(200).json(bill);
  } catch (e) {
    errorHandler(res, e);
  }
};
