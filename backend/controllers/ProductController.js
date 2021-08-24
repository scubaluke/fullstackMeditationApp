import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc get all products
// @route get api/products 
// @access public
export const getProducts = asyncHandler(async (req, res) => {
   const products = await Product.find({})
   res.json(products)
})