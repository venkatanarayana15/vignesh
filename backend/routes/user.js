import express from 'express'
import { createuser } from '../controllers/user.js'

const userroute = express.Router()

userroute.post("user/new",createuser)

export default userroute