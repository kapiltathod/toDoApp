const authentication = require('../models').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  signup(req, res) {
    console.log(req.body)
    return authentication
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10, function (err, hash) {
       })
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },


  login(req, res) {
    console.log('=====login===')
    authentication.findOne({where: {email:req.body.email}})
    .then(user=>{
      //console.log('====', user)
      bcrypt.compare(req.body.password, user.dataValues.password, (err, authResponse) => {
        if(err){
          return res.status(201).json({
            err
          });
        }
        console.log(authResponse)
        if (authResponse) {
          return res.status(201).send({
          message: 'auth successful.',
        });
        } else {
          return res.status(201).json({
            message: 'auth failed'
          });
        }

      });
    })
    .catch(err=>{
      res.status(400).json({message:'Invalid Password/email'});
    })

  }
}


