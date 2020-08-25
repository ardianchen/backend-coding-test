import express from 'express'
import * as rides from 'src/controllers'
import { inputValidation } from 'src/middlewares'
import * as validations from './validations'

const router = express.Router()

router.route('/rides')
  .get(
    rides.read
  )
  .post(
    inputValidation(validations.post),
    rides.post
  )
router.route('/ride:id')
  .get(
    rides.detail
  )
  .put(
    rides.update
  )
  .delete(
    rides.remove
  )

export default router
