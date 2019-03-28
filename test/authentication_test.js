process.env.NODE_ENV = 'test'
const { expect } = require('chai')
const request = require('supertest')
const app = require('../app')

describe('Authentication', () => {
  it('signup', (done) => {
    const signupCredentials = {
      firstName: 'kapil',
      lastName: 'tathod',
      gender: 'male',
      dateOfBirth: '1993-12-29',
      email: 'kapiltathod@gmail.com',
      password: 'rails'
    }

    const authenticatedUser = request.agent(app)
    authenticatedUser
      .post('/signup')
      .set('Accept', 'application/json')
      .send(signupCredentials)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.statusCode).to.equal(201)
        expect(res.body).to.have.property('firstName')
        expect(res.body.firstName).to.not.equal(null)
        expect(res.body).to.have.property('lastName')
        expect(res.body.lastName).to.not.equal(null)
        expect(res.body).to.have.property('gender')
        expect(res.body.gender).to.not.equal(null)
        expect(res.body).to.have.property('dateOfBirth')
        expect(res.body.dateOfBirth).to.not.equal(null)
        expect(res.body).to.have.property('email')
        expect(res.body.email).to.not.equal(null)
        expect(res.body).to.have.property('password')
        expect(res.body.password).to.not.equal(null)
        done()
      })
  })

  it('login', (done) => {
    const loginCredentials = {
      email: 'kl@gmail.com',
      password: 'rails'
    }
    beforeEach(function (done) {
      const authenticatedUser = request.agent(app)
      authenticatedUser
        .post('/login')
        .set('Accept', 'application/json')
        .send(loginCredentials)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          expect(res.statusCode).to.equal(201)
          token = res.body.token
          done()
        })
    })
    done()
  })
})
