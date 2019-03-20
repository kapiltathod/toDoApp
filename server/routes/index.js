const express = require('express')
const router = express.Router()
const Authentication = require('./authentication')
const Todo = require('./todos')
const TodoItem = require('./todoItems')
const Comment = require('./comments')

router.use('/', Authentication)
router.use('/', Todo)
router.use('/', TodoItem)
router.use('/', Comment)

module.exports = router
