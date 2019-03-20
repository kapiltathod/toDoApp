const { Todo } = require('../models')
const { TodoItem } = require('../models')

class Todos {
  static async create (req, res) {
    try {
      const todo = await Todo
        .create({
          title: req.body.title,
          userId: req.user.id
        })
      res.status(201).send(todo)
    } catch (error) {
      return res.status(400).send(error)
    }
  }

  static async list (req, res) {
    try {
      const todo = await Todo
        .findAll({
          include: [{
            model: TodoItem,
            as: 'todoItems'
          }]
        })
      res.status(201).send(todo)
    } catch (error) {
      return res.status(400).send(error)
    }
  }
}

module.exports = Todos
