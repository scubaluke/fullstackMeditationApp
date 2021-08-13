import express from 'express';
import asyncHandler from 'express-async-handler'
import Content from '../models/contentModel.js'

// @desc fetch page data 
// @route GET api/content 
// @access public
const router = express.Router()

router.get('/', asyncHandler( async (req, res) => {
    const content = await Content.findOne({ pageName: 'home'})
    res.json(content.pageContent)
}))

// @desc fetch page data 
// @route GET api/content/:page
// @access public
router.get('/:page', asyncHandler( async (req, res) => {
    const content = await Content.findOne({ pageName: req.params.page })
    if(content) {
        res.json(content.pageContent)
    } else {
        res.status(404)
        throw new Error('Page not found')
    }

}))

export default router