const User = require('../models').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class Authentication {
  static async signup(req, res) {
    try {
      const user = await User
        .create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          gender: req.body.gender,
          dateOfBirth: req.body.dateOfBirth,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10, function (err, hash) {
          })
        })
        res.status(201).send(user)
       } catch (error) {
         return res.status(400).send(error);
    }
  }

  static async login(req, res) {
    try {
      const user = await User
        .findOne({where: {email:req.body.email}})
        bcrypt.compare(req.body.password, user.dataValues.password, (err, authResponse) => {
        if(err) {
          return res.status(201).json({err});
        }
        if (authResponse) {
          const token = jwt.sign ({
            email: user.dataValues.email,
            id: user.dataValues.id
          },
            process.env.JWT_KEY, {
            expiresIn: "1h"
            }
          )
          return res.status(201).send({
          message: 'Login Successful.',
          token: token
          });
        } else {
          return res.status(201).json({
          message: 'Incorrect email/password'
          });
        }
      });
    } catch (error) {
      return res.status(201).json({
        message: 'Go for Signup'
      });
    }
  }
}

module.exports = Authentication;

