const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

module.exports = {
  createTodo (req, res) {
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Todo
      .findAll({
        include: [{
          itemName: req.body.itemName,
          description: req.body.description,
          comment: req.body.comment
        }],
      })
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Todo
      .findById(req.params.todoId)
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
           message: 'Todo Not Found',
          });
        }
        return res.status(200).send(todo);
      })
      .catch(error => res.status(400).send(error));
  },
};