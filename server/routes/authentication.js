const router = require('express').Router();
const Authentication = require('../controllers/authentication');
const signupAuth = require('../middlewares/signupAuth');
const validatorMiddleware = require('../middlewares/validator');
const signupSchema = require('../schemas/signupSchema');

router.post('/signup', validatorMiddleware(signupSchema), Authentication.signup);
router.post('/login', Authentication.login);

module.exports = router;