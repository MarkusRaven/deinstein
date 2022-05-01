const { Router } = require('express')
const CartController = require('../controllers/cart.controller')
const auth = require('../middlewares/auth-middleware')
const router = Router()

router.get('/', auth, CartController.getCart)

router.post('/add', auth, CartController.add)

module.exports = router
