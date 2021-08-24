import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc get all products
// @route get api/products 
// @access public
export const getProducts = asyncHandler(async (req, res) => {
   const products = await Product.find({})
   res.json(products)
})

// @desc get product by id
// @route get api/products/:id 
// @access public
export const getProductById = asyncHandler(async (req, res) => {
   const id = req.params.id 
   
   const product = await Product.findOne({ _id: id })

   res.json(product)
})