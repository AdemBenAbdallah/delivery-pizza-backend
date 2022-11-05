import express from 'express'
import {handle} from '../controllers/login.js'

const router = express.Router()

router.post("/" , handle)

export default router