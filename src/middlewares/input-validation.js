import { UnprocessableEntityError } from '../errors/http'

export default function inputValidation (validationFactory) {
  return (req, res, next) => {
    const validation = validationFactory(req)
    if (validation.fails()) {
      return next(new UnprocessableEntityError(validation.errors.all()))
    }

    return next()
  }
}
