import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc Auth user & get a token
// @route Post api/users/login 
// @access public
export const authUser = asyncHandler(async (req, res) => {
     const { email, password } = req.body
     res.send({email, password})
})