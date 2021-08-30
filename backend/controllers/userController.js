import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc Auth user & get a token
// @route Post api/users/login 
// @access public
export const authUser = asyncHandler(async (req, res) => {
     const { email, password } = req.body

    const user = await User.findOne({ email: email.toLowerCase() })

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        }) 
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }

     res.send({email, password})
})


// @desc get user profile
// @route GET api/users/profile 
// @access private
export const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc update user profile
// @route PUT api/users/profile 
// @access private
export const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
       user.name = req.body.name || user.name
       user.email = req.body.email || user.email
       user.phone = req.body.phone || user.phone
        if (req.body.password) {
            user.password = req.body.password
        }
        const updatedUser = await user.save()

           res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            phone: updatedUser.phone,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id)
        }) 

    } else {
        res.status(404)
        throw new Error('User not found')
    }
})


// @desc register new User
// @route POST api/users 
// @access public
export const registerUser = asyncHandler(async (req, res) => {
        const { name, email, phone, password } = req.body
        const insureEmail = email || ''
        
    const userExists = await User.findOne({ email: insureEmail.toLowerCase() })

    if(userExists) {
        res.status(400)
        throw new Error('A user with this email address already exists')
    }

    const user = await User.create({
        name, email: insureEmail.toLowerCase(), phone, password
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
   

})