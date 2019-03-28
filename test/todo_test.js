process.env.NODE_ENV = 'test'
const { expect } = require('chai')
const request = require('supertest')
const app = require('../app')

describe('Todo', () => {
  it('todoCreation', (done) => {
    const titleName = {
      title: 'newTask'
    }
    const authenticatedUser = request.agent(app)
    authenticatedUser
      .post('/todos')
      .set('Authorization', token)
      .send(titleName)
      .end((err, res) => {
        expect(res.statusCode).to.equal(201)
        expect(res.body).to.have.property('title')
        expect(res.body.title).to.not.equal(null)
        done()
      })
  })

  it('todoList', (done) => {
    const authenticatedUser = request.agent(app)
    authenticatedUser
      .get('/todos')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.statusCode).to.equal(201)
        done()
      })
  })
})
