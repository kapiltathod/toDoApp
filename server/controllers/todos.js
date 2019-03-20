const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

class Todos {
  static async create(req, res) {
    try {
      const todo = await Todo
        .create ({
          title: req.body.title,
          userId: req.user.id,
        })
        res.status(201).send(todo)
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  static async list(req, res) {
    try {
      const todo = await Todo
        .findAll({
          include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      res.status(201).send(todo)
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  static async update(req, res) {
    try {
      const todo = await Todo
        .findById(req.params.todoId, {
          include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      if (!todo) {
        return res.status(404).send({
        message: 'Todo Not Found',
        });
      } else {
        console.log('====3')
        return Todo
          .update({
            title: req.body.title,
          })
        console.log('====4')
         res.status(201).send(todo)
       }
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

module.exports = Todos;
