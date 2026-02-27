const Category = require('../models/Category');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function (req, res) {
  try {
    const categories = await Category.find({ user: req.user._id });
    res.status(200).json(categories);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.getById = async function (req, res) {
  try {
    const category = await Category.findOne({ _id: req.params.id, user: req.user._id });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.remove = async function (req, res) {
  try {
    await Category.deleteOne({ _id: req.params.id, user: req.user._id });
    res.status(200).json({ message: 'Category deleted' });
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.create = async function (req, res) {
  try {
    const category = await new Category({
      name: req.body.name,
      capacity: req.body.capacity,
      user: req.user._id,
    }).save();
    res.status(201).json(category);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.update = async function (req, res) {
  try {
    const category = await Category.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { $set: { name: req.body.name, capacity: req.body.capacity } },
      { new: true }
    );
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (e) {
    errorHandler(res, e);
  }
};
