import express from 'express';
import { getContent, getHomeContent } from '../controllers/contentController.js';


const router = express.Router()

router.route('/').get(getHomeContent)
router.route('/:page').get(getContent)

export default router