const TodoItem = require('../models').TodoItem;

module.exports = {

  createTodoItems(req, res) {
    return TodoItem
      .create({
        itemName: req.body.itemName,
        description: req.body.description,
        comment: req.body.comment
      })
      .then(todoItem => res.status(201).send(todoItem))
      .catch(error => res.status(400).send(error));
  },

   list(req, res) {
    return TodoItem
      .all()
      .then(todoItems => res.status(200).send(todoItems))
      .catch(error => res.status(400).send(error));
    },
};