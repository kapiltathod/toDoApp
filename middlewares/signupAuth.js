const authentication = require('../server/models').User;


module.exports = (req, res, next) => {
  try {
    authentication.findOne({where: {email:req.body.email}})
    .then(user => {
       if (true) {
         console.log('====df===', req.body.email)
         console.log('====dd===', user.dataValues.email)
         if (req.body.email === user.dataValues.email) {
           return res.status(401).json({message: 'Mail Exists'});
         }
       } else {
         next();
       }

     })
    }  catch (error) {
        return res.status(401).json({
        message: 'error'
      });
  }
}