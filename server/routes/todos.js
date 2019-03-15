const router = require('express').Router();
const Todos = require('../controllers/todos');
const checkAuth = require('../../middlewares/checkAuth');

router.post('/', checkAuth, Todos.create);

module.exports = router;



// const Todo = require('../controllers/todos');
// router.post('/', checkAuth, Todo.create);
// router.get('/', checkAuth, Todo.list);
