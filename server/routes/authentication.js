const express = require('express')
const router = express.Router()
const Authentication = require('../controllers/authentication')
const Signup = require('../middlewares/signupAuth')
const validatorMiddleware = require('../middlewares/validator')
const signupSchema = require('../schemas/signupSchema')

router.post('/signup', validatorMiddleware(signupSchema), Signup.auth, Authentication.signup)
router.post('/login', Authentication.login)

module.exports = router
