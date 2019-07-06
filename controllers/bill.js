const Bill = require('../models/Bill')
const errorHandler = require('../utils/errorHandler')

module.exports.get = async function(req, res) {
  try {
    const bill = await Bill.find();
    res.status(200).json(bill[0].toObject());
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.create = async function(req, res) {
  try {
    const bill = await new Bill({
      value: req.body.value,
      currency: req.body.currency
    }).save();
    res.status(201).json(bill)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async function(req, res) {
  const updated = {
    value: req.body.value,
    currency: req.body.currency
  };

  try {
    const bill = await Bill.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updated }
      
    );
    res.status(200).json(bill);
  } catch (e) {
    errorHandler(res, e);
  }
};
