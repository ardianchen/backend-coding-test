import express from 'express'
import * as rides from '../../controllers'
import { inputValidation } from '../../middlewares'
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
router.route('/ride/:id')
  .get(
    rides.detail
  )
  .put(
    inputValidation(validations.post),
    rides.update
  )
  .delete(
    rides.remove
  )

export default router
