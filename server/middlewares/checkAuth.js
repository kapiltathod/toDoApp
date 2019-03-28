const jwt = require('jsonwebtoken')
const config = require('../config/config.json')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization
    console.log(req.headers)
    const decoded = jwt.verify(token, config[process.env.NODE_ENV].JWT_KEY)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed' })
  }
}
