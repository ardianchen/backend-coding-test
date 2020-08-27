/* eslint-disable handle-callback-err */
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-undef
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import chai from 'chai'
import chaiHttp from 'chai-http'

import app from '../src/app'
chai.use(chaiHttp)

describe('API Testing', () => {
  it('it should not found', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        chai.expect(res).to.have.status(404)
      })
    done()
  })
  it('it should failure to to access', (done) => {
    chai.request(app)
      .get('/api/rides')
      .end((err, res) => {
        chai.expect(res).to.have.status(400)
      })
    done()
  })
  it('it should failure key not match', (done) => {
    chai.request(app)
      .get('/api/rides')
      .set('x-auth', '23')
      .end((err, res) => {
        chai.expect(res).to.have.status(400)
      })
    done()
  })
  it('it should success to retrive all data', (done) => {
    chai.request(app)
      .get('/api/rides')
      .set('x-auth', 'gGnyWtx21ztdIsxGG8CFxSPy7u')
      .query({ pagenum: 3, limit: 6 })
      .end((err, res) => {
        // chai.expect(res).to.have.header('x-auth')
        chai.expect(res).to.have.status(200)
        chai.expect(res).to.be.a('object')
        chai.expect(res.body.result).to.be.a('array')
        chai.expect(res.body.message).to.be.equal('found')
      })
    done()
  })
  it('it should success to retrive one data', (done) => {
    chai.request(app)
      .get('/api/ride/1')
      .set('x-auth', 'gGnyWtx21ztdIsxGG8CFxSPy7u')
      .end((err, res) => {
        chai.expect(res).to.have.status(200)
        chai.expect(res).to.be.a('object')
        chai.expect(res.body.message).to.be.equal('found')
      })
    done()
  })
  it('it should success send data 422', (done) => {
    chai.request(app)
      .post('/api/rides')
      .set('x-auth', 'gGnyWtx21ztdIsxGG8CFxSPy7u')
      .send({
        rider_name: 'ardian',
        driver_name: '',
        driver_vehicle: '',
        start_lat: 100,
        start_long: 100,
        end_lat: 100,
        end_long: 100
      })
      .end((err, res) => {
        chai.expect(res).to.have.status(422)
        chai.expect(res).to.be.a('object')
        chai.expect(res.body.message).to.be.equal('Cannot process your request')
      })
    done()
  })
  it('it should success send data 422 lang', (done) => {
    chai.request(app)
      .post('/api/rides')
      .set('x-auth', 'gGnyWtx21ztdIsxGG8CFxSPy7u')
      .send({
        rider_name: 'ardian',
        driver_name: '',
        driver_vehicle: '',
        start_lat: 100,
        start_long: 100,
        end_lat: 100,
        end_long: 100
      })
      .end((err, res) => {
        chai.expect(res).to.have.status(422)
        chai.expect(res).to.be.a('object')
        chai.expect(res.body.message).to.be.equal('Cannot process your request')
      })
    done()
  })
  it('it should success send data', (done) => {
    chai.request(app)
      .post('/api/rides')
      .set('x-auth', 'gGnyWtx21ztdIsxGG8CFxSPy7u')
      .send({
        rider_name: 'ardian',
        driver_name: 'anugerhanato',
        driver_vehicle: 'porse',
        start_lat: 0,
        start_long: 100,
        end_lat: 0,
        end_long: 100
      })
      .end((err, res) => {
        chai.expect(res).to.have.status(201)
        chai.expect(res).to.be.a('object')
        chai.expect(res.body.message).to.be.equal('success')
      })
    done()
  })
  it('it should success update data', (done) => {
    chai.request(app)
      .put('/api/ride/1')
      .set('x-auth', 'gGnyWtx21ztdIsxGG8CFxSPy7u')
      .send({
        rider_name: 'ardian',
        driver_name: 'anugrah',
        driver_vehicle: 'purce',
        start_lat: 0,
        start_long: 100,
        end_lat: 0,
        end_long: 100
      })
      .end((err, res) => {
        chai.expect(res).to.have.status(201)
        chai.expect(res).to.be.a('object')
        chai.expect(res.body.message).to.be.equal('fail')
      })
    done()
  })
  it('it should success delete data', (done) => {
    chai.request(app)
      .delete('/api/ride/1')
      .set('x-auth', 'gGnyWtx21ztdIsxGG8CFxSPy7u')
      .end((err, res) => {
        chai.expect(res).to.have.status(201)
        chai.expect(res).to.be.a('object')
        chai.expect(res.body.message).to.be.equal('fail')
      })
    done()
  })
})
