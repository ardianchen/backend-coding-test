import {
  find,
  findOne,
  create,
  edit,
  del
} from '../repositories'
import Paging from '../lib/paging'

export const read = async (payload = {}) => {
  let {
    pagenum = 1,
    limit = 10,
    sort = 'rideID',
    dir = 'DESC'
  } = payload.query
  pagenum = Number(pagenum)
  const end = Number(limit)
  const start = (pagenum - 1) * end
  const data = await find({
    start: start,
    pagenum: pagenum,
    end: end,
    sort: sort,
    dir: dir
  })
  const paging = new Paging({
    count: data.count,
    pagenum: pagenum,
    end: end
  }).pagination
  return {
    msg: data.count > 0 ? 'found' : 'not found',
    res: data.rows,
    page: paging
  }
}

export const detail = async (payload = {}) => {
  return { msg: 'success', res: await findOne({ id: payload.params.id }) !== null ? await findOne({ id: payload.params.id }) : {} }
}

export const insert = async (payload = {}) => {
  const res = await create({
    startLat: payload.body.start_lat,
    startLong: payload.body.start_long,
    endLat: payload.body.end_lat,
    endLong: payload.body.end_long,
    riderName: payload.body.rider_name,
    driverName: payload.body.driver_name,
    driverVehicle: payload.body.driver_vehicle
  })
  return { msg: res === 1 ? 'success' : 'fail' }
}

export const update = async (payload = {}) => {
  const res = await edit({
    id: payload.params.id,
    body: {
      startLat: payload.body.start_lat,
      startLong: payload.body.start_long,
      endLat: payload.body.end_lat,
      endLong: payload.body.end_long,
      riderName: payload.body.rider_name,
      driverName: payload.body.driver_name,
      driverVehicle: payload.body.driver_vehicle
    }
  })
  return { msg: res === 1 ? 'success' : 'fail' }
}
export const remove = async (payload = {}) => {
  const res = await del({
    id: payload.params.id
  })
  return { msg: res === 1 ? 'success' : 'fail' }
}
