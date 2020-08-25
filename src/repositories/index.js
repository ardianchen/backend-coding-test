import {
  ride
} from '../models'

// can use raw with sequlize.literal
export const find = async (payload = {}) => {
  const data = await ride.findAndCountAll({
    offset: payload.start,
    limit: payload.end,
    order: [[payload.sort, payload.dir]]
  })
  return data
}
export const create = async (payload = {}) => {
  const data = await ride.create(payload)
  if (data) {
    return 1
  } else {
    return 0
  }
}

export const edit = async (payload = {}) => {
  const data = await ride.update(
    payload.body, {
      where: {
        rideID: payload.id
      }
    })
  return data[0]
}
export const del = async (payload = {}) => {
  const data = await ride.findByIdAndRemove({
    rideID: payload.id
  })
  return data[0]
}
export const findOne = async (payload = {}) => {
  return await ride.findOne({
    rideID: payload.id
  })
}
