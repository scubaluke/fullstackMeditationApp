import express from 'express';
import asyncHandler from 'express-async-handler'
import Content from '../models/contentModel.js'

// @desc fetch page data 
// @route GET api/content 
// @access public
const router = express.Router()

router.get('/', asyncHandler( async (req, res) => {
    const content = await Content.find({})
    res.json(content)
}))


router.get('/:page', asyncHandler( async (req, res) => {
    const content = await Content.findOne({ pageName: req.params.page })
   
    if(content) {
        res.json(content.pageContent)
    } else {
        res.status(404).json({ message: 'Page not found' })
    }

}))

export default router