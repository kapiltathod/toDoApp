const Todo = require('../models').Todo;

class Todos {
  static async create(req, res) {
    try {
      const todo = await Todo
        .create ({
          title: req.body.title,
          userId: req.user.id,
        })
        if (req.body.title.length < 3 ) {
          return res.status(201).send({
          message: 'Title length should be more than 3'
          })
        }
        if(/^[a-zA-Z0-9]*$/.test(req.body.title) == false) {
          return res.status(201).send({
          message: 'Not alpha numeric'
          })
        } else {
          res.status(201).send(todo)
        }
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  static async list(req, res) {
    try {
      const todo = await Todo
        .all()
      res.status(201).send(todo)
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

module.exports = Todos;
