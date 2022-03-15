import express from 'express'

import { registerCustomer, getCustomers } from '../controllers/customerController.js'
import { protect } from '../middleware/authMiddleware.js'


const router = express.Router()

router.route('/').post(protect, registerCustomer).get(protect, getCustomers)


export default router