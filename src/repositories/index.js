import {
  ride
} from '../models'

// can use raw with sequlize.literal
export const find = async (payload = {}) => {
  return await ride.findAndCountAll({
    offset: payload.start,
    limit: payload.end,
    order: [[payload.sort, payload.dir]]
  })
}
export const create = async (payload = {}) => {
  try {
    await ride.create(payload)
    return 1
  } catch (error) {
    return 0
  }
}

export const edit = async (payload = {}) => {
  return await ride.update(
    payload.body, {
      where: {
        rideID: payload.id
      }
    })[0]
}
export const del = async (payload = {}) => {
  return await ride.destroy({
    where: {
      rideID: payload.id
    }
  })
}
export const findOne = async (payload = {}) => {
  return await ride.findOne({
    where: {
      rideID: payload.id
    }
  })
}
