import asyncHandler from 'express-async-handler'
import Customer from '../models/customerModel.js'

// @desc    Register a new customer
// @route   POST /api/customers    
// @access  Private
const registerCustomer = asyncHandler(async (req, res) => {

    const { firstName, lastName, address, postcode, mobile } = req.body


    if (mobile.length < 10 && mobile.length > 12) {
        res.status(400)
        throw new Error('Mobile number must be minimum of 10 and maximum of 12 characters')
    }

    const customer = await Customer.create({
        firstName,
        lastName,
        address,
        postcode,
        mobile,
    })

    if (customer) {
        res.status(201).json({
            id: customer.id,
            firstName: customer.firstName,
            lastName: customer.lastName,
            address: customer.address,
            postcode: customer.postcode,
            mobile: customer.mobile,
        })
    } else {
        res.status(404)
        throw new Error('Invalid customer data')
    }
})

// @desc    Get all customers
// @route   GET /api/customers
// @access  Private
const getCustomers = asyncHandler(async (req, res) => {

    const customers = await Customer.findAll({})

    if (customers) {
        res.json(customers)

    } else {
        res.status(404)
        throw new Error('User not found')
    }

})

export { registerCustomer, getCustomers }