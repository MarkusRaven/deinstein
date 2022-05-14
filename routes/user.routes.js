const { Router } = require('express')
const UserController = require('../controllers/user.controller.js')
const auth = require('../middlewares/auth-middleware')
const router = Router()

router.get('/profile', auth, UserController.getUser)

router.post('/profile/edit', auth, UserController.editUser)

module.exports = router
