const Validator = require('fastest-validator')

function validatorMiddleware (schema) {
  return (req, res, next) => {
    const v = new Validator()
    const check = v.compile(schema)
    const result = check(req.body)
    if (!result) {
      return res.status(201).send(result)
    }
    next()
  }
}

module.exports = validatorMiddleware
