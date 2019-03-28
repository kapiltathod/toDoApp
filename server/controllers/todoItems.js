const { TodoItem } = require('../models')

class TodoItems {
  static async create (req, res) {
    try {
      const todoItem = await TodoItem
        .create({
          itemName: req.body.itemName,
          description: req.body.description,
          comment: req.body.comment
          // todoId: req.params.todoId
        })
      res.status(201).send(todoItem)
    } catch (error) {
      res.status(400).send(error)
    }
  }

  static async list (req, res) {
    try {
      const todoItems = await TodoItem
        .all()
      res.status(201).send(todoItems)
    } catch (error) {
      return res.status(400).send(error)
    }
  }
}

module.exports = TodoItems
