const express = require('express')
const router = express.Router()
const Todos = require('../controllers/todos')
const checkAuth = require('../middlewares/checkAuth')
const validatorMiddleware = require('../middlewares/validator')
const todoSchema = require('../schemas/todoSchema')

router.post('/todos', checkAuth, validatorMiddleware(todoSchema), Todos.create)
router.get('/todos', checkAuth, Todos.list)

module.exports = router
