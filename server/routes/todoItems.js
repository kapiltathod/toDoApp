const router = require('express').Router();
const checkAuth = require('../middlewares/checkAuth');
const TodoItems = require('../controllers/todoItems');

router.post('/todos/:todoId/todoItems', checkAuth, TodoItems.create);
router.get('/todos/:todoId/todoItems', checkAuth, TodoItems.list);

module.exports = router;