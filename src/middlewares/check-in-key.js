import status from 'http-status'
import r from '../lib/resjson'

export default () => {
  return (req, res, next) => {
    let response
    if (!req.headers['x-auth']) {
      response = r(41, 'missing x-auth key')
      return res.status(status.BAD_REQUEST).json(response)
    }

    if (req.headers['x-auth'] !== process.env.TOKEN_KEY) {
      response = r(41, 'key not available')
      return res.status(status.BAD_REQUEST).json(response)
    }

    return next()
  }
}
