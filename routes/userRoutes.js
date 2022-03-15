import express from 'express'

import { authUser, registerUser, getUsers } from '../controllers/userController.js'
// import { protect, admin } from '../middleware/authMiddleware.js'


const router = express.Router()

router.route('/').post(registerUser).get(getUsers)

router.post('/login', authUser)



export default router