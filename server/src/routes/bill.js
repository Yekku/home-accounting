const express = require('express');
const auth = require('../middleware/auth');
const controller = require('../controllers/bill');
const router = express.Router();

router.get('/', auth, controller.get);
router.post('/', auth, controller.create);
router.put('/:id', auth, controller.update);

module.exports = router;
