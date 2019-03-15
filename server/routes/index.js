const router = require('express').Router();
const Authentication = require('./authentication');
const Todo = require('./todos');
const TodoItem = require('./todoItems');

router.use('/authentication', Authentication);
router.use('/todos', Todo);
router.use('/todos/:todoId/todoItems', TodoItem);

module.exports = router;