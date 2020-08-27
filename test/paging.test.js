/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import chai from 'chai'
import Paging from '../src/lib/paging'
describe('test paging function', () => {
  it('paging return', async () => {
    const page = new Paging({
      count: 200,
      pagenum: 6,
      end: 6
    }).pagination
    chai.expect(page).to.be.a('object')
    chai.expect(page).to.have.property('count_item').to.equal(200)
    chai.expect(page).to.have.property('countpage').to.equal(34)
    chai.expect(page).to.have.property('first_page').to.be.true
    chai.expect(page).to.have.property('last_page').to.be.true
    chai.expect(page).to.have.property('detail').to.be.a('string')
  })
  it('paging return first', async () => {
    const page = new Paging({
      count: 10,
      pagenum: 1,
      end: 5
    }).pagination
    chai.expect(page).to.have.property('countpage').to.equal(2)
  })
  it('paging return last', async () => {
    const page = new Paging({
      count: 10,
      pagenum: 2,
      end: 5
    }).pagination
    chai.expect(page).to.have.property('countpage').to.equal(2)
  })
  it('should throw an error', async () => {
    const page = new Paging().pagination
    chai.expect(page).to.be.undefined
  })
  it('should throw an error', async () => {
    const page = new Paging({}).pagination
    chai.expect(page).to.be.a('object')
  })
})
