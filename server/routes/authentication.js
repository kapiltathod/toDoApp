const router = require('express').Router();
const User = require('../controllers/authentication');

router.post('/signup', User.signup);
router.post('/login', User.login);

module.exports = router;