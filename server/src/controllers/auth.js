const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config');
const errorHandler = require('../utils/errorHandler');

module.exports.login = async function (req, res) {
  try {
    const candidate = await User.findOne({ email: req.body.email });

    if (!candidate) {
      return res.status(404).json({
        message: 'User with this email not found.',
      });
    }

    const passwordMatch = await bcrypt.compare(req.body.password, candidate.password);
    if (!passwordMatch) {
      return res.status(401).json({
        message: 'Incorrect password. Please try again.',
      });
    }

    const token = jwt.sign(
      { name: candidate.name, userId: candidate._id },
      config.jwt,
      { expiresIn: config.jwtExpiresIn }
    );

    res.status(200).json({
      token: `Bearer ${token}`,
    });
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.register = async function (req, res) {
  try {
    const candidate = await User.findOne({ email: req.body.email });

    if (candidate) {
      return res.status(409).json({
        message: 'This email is already taken. Try another one.',
      });
    }

    const salt = await bcrypt.genSalt(10);
    const user = new User({
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, salt),
      name: req.body.name,
    });

    await user.save();
    res.status(201).json(user);
  } catch (e) {
    errorHandler(res, e);
  }
};
