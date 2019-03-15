const router = require('express').Router();
const checkAuth = require('../../middlewares/checkAuth');
const TodoItems = require('../controllers/todoItems');


router.post('/', checkAuth, TodoItems.create);

// const TodoItem = require('../controllers/todoItems');
// router.post('/', checkAuth, TodoItem.create);
// router.get('/', checkAuth, TodoItem.list);

module.exports = router;