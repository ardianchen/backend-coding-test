/* eslint-disable no-undef */
import chai from 'chai'
import chaiHttp from 'chai-http'
// import Sequelize from 'sequelize'
// import * as constroller from '../src/services'
chai.use(chaiHttp)

// const db = new Sequelize('mysql://admin:password@localhost:3306/sample')
// beforeAll(async () => {
//   await db.connect()
// })
// after(async (done) => {
//   console.log(await db.close())
//   await db.sync(async () => {
//     await db.close(function () {
//       done()
//     })
//   })
// })
// afterAll(async () => {
//   await db.clear()
//   await db.close()
// })

// function
// describe('test read', () => {
//   it('should array', async () => {
//     const a = constroller.read()
//     console.log(await a)
//   })
// })

// eslint-disable-next-line no-undef
describe('API Testing', () => {
  // eslint-disable-next-line no-undef
  it('it should success to retrive all data', (done) => {
    chai.request('localhost:8010')
      .get('/api/rides')
      .set('x-auth', 'gGnyWtx21ztdIsxGG8CFxSPy7u')
      // eslint-disable-next-line handle-callback-err
      .end((err, res) => {
        chai.expect(res).to.have.status(200)
      })
    done()
  })
})
