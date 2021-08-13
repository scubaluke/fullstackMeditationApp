import asyncHandler from 'express-async-handler'
import Content from '../models/contentModel.js'


// @desc fetch page data 
// @route GET api/content 
// @access public
export const getHomeContent = asyncHandler(async (req, res) => {
      const content = await Content.findOne({ pageName: 'home'})
        res.json(content.pageContent)
})

// @desc fetch page data 
// @route GET api/content/:page
// @access public
export const getContent = asyncHandler(async (req, res) => {
    const page = req.params.page
    const content = await Content.findOne({ pageName: page })
    if(content) {
        res.json(content.pageContent)
    } else {
        res.status(404)
        throw new Error('Page not found')
    }
})
