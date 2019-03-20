const { Comment } = require('../models')

class Comments {
  static async create (req, res) {
    try {
      const comments = await Comment
        .create({
          comment: req.body.comment
        })
      res.status(201).send(comments)
    } catch (error) {
      return res.status(400).send(error)
    }
  }

  static async list (req, res) {
    try {
      const comments = await Comment
        .all()
      res.status(201).send(comments)
    } catch (error) {
      return res.status(400).send(error)
    }
  }
}

module.exports = Comments
