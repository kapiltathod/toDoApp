process.env.NODE_ENV = 'test'
const { expect } = require('chai')
const request = require('supertest')
const app = require('../app')

describe('TodoItem', () => {
  it('todoItemCreation', (done) => {
    const todoItemDetails = {
      itemName: 'callbacks',
      description: 'part of javascript',
      comment: ''
    }
    const authenticatedUser = request.agent(app)
    authenticatedUser
      .post('/todos/:todoId/todoItems')
      .set('Authorization', token)
      .send(todoItemDetails)
      .end((err, res) => {
        expect(res.statusCode).to.equal(201)
        expect(res.body).to.have.property('itemName')
        expect(res.body.itemName).to.not.equal(null)
        expect(res.body).to.have.property('description')
        expect(res.body.description).to.not.equal(null)
        expect(res.body).to.have.property('comment')
        expect(res.body.comment).to.not.equal(null)
        done()
      })
  })

  it('todoItemList', (done) => {
    const authenticatedUser = request.agent(app)
    authenticatedUser
      .get('/todos/:todoId/todoItems')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.statusCode).to.equal(201)
        done()
      })
  })
})
