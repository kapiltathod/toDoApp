const router = require('express').Router();
const checkAuth = require('../middlewares/checkAuth');
const TodoItems = require('../controllers/todoItems');
const validatorMiddleware = require('../middlewares/validator');
const todoItemSchema = require('../schemas/todoItemSchema');

router.post('/todos/:todoId/todoItems', validatorMiddleware(todoItemSchema), TodoItems.create);
router.get('/todos/:todoId/todoItems', checkAuth, TodoItems.list);

module.exports = router;