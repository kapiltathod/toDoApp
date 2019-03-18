const router = require('express').Router();
const Todos = require('../controllers/todos');
const checkAuth = require('../middlewares/checkAuth');

router.post('/todos', checkAuth, Todos.create);
router.get('/todos', checkAuth, Todos.list);

module.exports = router;

