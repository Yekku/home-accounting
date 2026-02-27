const express = require('express');
const auth = require('../middleware/auth');
const controller = require('../controllers/event');
const router = express.Router();

router.get('/', auth, controller.getAll);
router.get('/:id', auth, controller.getById);
router.post('/', auth, controller.create);

module.exports = router;
