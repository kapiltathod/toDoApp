process.env.NODE_ENV = 'test'
const { expect } = require('chai')
const request = require('supertest')
const app = require('../app')

describe('Comments', () => {
  it('commentGeneration', (done) => {
    const comment = {
      comment: 'this part was tough'
    }
    const authenticatedUser = request.agent(app)
    authenticatedUser
      .post('/todoItems/:todoItemId/comments')
      .set('Authorization', token)
      .send(comment)
      .end((err, res) => {
        expect(res.statusCode).to.equal(201)
        expect(res.body).to.have.property('comment')
        expect(res.body.comment).to.not.equal(null)
        done()
      })
  })

  it('commentList', (done) => {
    const authenticatedUser = request.agent(app)
    authenticatedUser
      .get('/todoItems/:todoItemId/comments')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.statusCode).to.equal(201)
        done()
      })
  })
})
