const router = require('express').Router();
const TodoItem = require('../controllers/todoItems');
const checkAuth = require('../../middlewares/checkAuth');

router.post('/', checkAuth, TodoItem.create);
router.get('/', checkAuth, TodoItem.list);

module.exports = router;