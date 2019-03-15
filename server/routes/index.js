const router = require('express').Router();
const User = require('./authentication');
const Todo = require('./todos');
const TodoItem = require('./todoItems');

router.use('/authentication', User);
router.use('/todos', Todo);
router.use('/todos/:todoId/items', TodoItem);

module.exports = router;