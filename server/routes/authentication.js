const router = require('express').Router();
const Authentication = require('../controllers/authentication');

router.post('/signup', Authentication.signup);
router.post('/login', Authentication.login);

module.exports = router;