const authentication = require('../models').User;

class Signup {
  static async auth(req, res, next) {
    try {
      const user = await authentication
        .findOne({where: {email:req.body.email}})
        if (user) {
        return res.status(401).json({message: 'Mail exists, try signup with different email Id'});
        } else {
         next();
       }
    } catch (error) {
      return res.status(401).json({message: 'error'});
    }
  }
}

module.exports = Signup;