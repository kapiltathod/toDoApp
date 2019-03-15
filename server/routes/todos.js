const router = require('express').Router();
const Todo = require('../controllers/todos');
const checkAuth = require('../../middlewares/checkAuth');

router.post('/', checkAuth, Todo.create);
router.get('/', checkAuth, Todo.list);

module.exports = router;
