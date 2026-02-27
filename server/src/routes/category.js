const express = require('express');
const auth = require('../middleware/auth');
const controller = require('../controllers/category');
const router = express.Router();

router.get('/', auth, controller.getAll);
router.get('/:id', auth, controller.getById);
router.delete('/:id', auth, controller.remove);
router.post('/', auth, controller.create);
router.put('/:id', auth, controller.update);

module.exports = router;
