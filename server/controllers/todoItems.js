const TodoItem = require('../models').TodoItem;

class TodoItems {
  static async create(req, res) {
    try {
      console.log('====1')
      const todoItem = await TodoItem
        .create({
        itemName: req.body.itemName,
        description: req.body.description,
        comment: req.body.comment,
      })
      if (req.body.itemName.length < 3 ) {
        console.log('====2')
        return res.status(201).send({
        message: 'itemName length should be more than 3'
        })
      }
      if(/^[a-zA-Z0-9]*$/.test(req.body.title) == false) {
        return res.status(201).send({
        message: 'Not alpha numeric'
        })
      } else {
        res.status(201).send(todoItem)
        }
    } catch (error) {
      res.status(400).send(error)
    }
  }

  static async list(req, res) {
    try {
      const todoItems = await TodoItem
        .all()
      res.status(201).send(todoItems)
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

module.exports = TodoItems;


