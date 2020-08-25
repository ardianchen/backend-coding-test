import express from 'express'

import ride from './ride'

const router = express.Router()

router.use('/', ride)

export default router
