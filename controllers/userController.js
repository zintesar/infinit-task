import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc    Login user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {

    const { userName, password, } = req.body

    const user = await User.findOne({ where: { userName: userName } })

    if (user && (await user.matchPassword((password)))
    ) {
        res.json({
            id: user.id,
            userName: user.userName,
            // password: user.password,
            token: generateToken(user.id)
        })

    } else {
        res.status(401)
        // .json({ message: 'invalid email or password' })
        throw new Error('invalid user name or password')

    }
    res.send({ email, password, })

})


// @desc    Register a new user
// @route   POST /api/users    
// @access  Public
const registerUser = asyncHandler(async (req, res) => {

    const { userName, password, firstName, lastName } = req.body

    const userExists = await User.findOne({ where: { userName: userName } })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    if (userName.length < 6) {
        res.status(400)
        throw new Error('user name must be minimum of 6 characters')
    }

    if (password.length < 8) {
        res.status(400)
        throw new Error('Password must be minimum of 8 characters')
    }

    const user = await User.create({
        userName,
        password,
        firstName,
        lastName
    })

    if (user) {
        res.status(201).json({
            id: user.id,
            userName: user.userName,
            password: user.password,
            token: generateToken(user.id)
        })
    } else {
        res.status(404)
        throw new Error('Invalid user data')
    }
})


// @desc    Get all users
// @route   GET /api/users
// @access  Public
const getUsers = asyncHandler(async (req, res) => {

    const users = await User.findAll({})

    if (users) {
        res.json(users)

    } else {
        res.status(404)
        throw new Error('User not found')
    }

})

export { authUser, registerUser, getUsers }