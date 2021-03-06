const express = require('express')
const passport = require('passport')
const controller = require('../controllers/bill')
const router = express.Router()


router.get('/', passport.authenticate('jwt', {session: false}), controller.get)
router.post('/', passport.authenticate('jwt', {session: false}), controller.create)
router.put('/:id', passport.authenticate('jwt', {session: false}), controller.update)


module.exports = router