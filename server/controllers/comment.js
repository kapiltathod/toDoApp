const Comment = require('../models').Comment;

module.exports = {
  createComments (req, res) {
    return Comment
      .create({
        comment: req.body.comment
      })
      .then(comment => res.status(201).send(comment))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Comment
      .all()
      .then(comment => res.status(200).send(comment))
      .catch(error => res.status(400).send(error));
    },
};