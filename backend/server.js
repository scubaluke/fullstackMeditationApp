import express from 'express';
import dotenv from 'dotenv'
import 'colors'
import connectDB from './config/db.js';

import pageRoutes from './routes/pageRoutes.js'

dotenv.config();
connectDB()
const app = express()

app.get('/', (req, res) => {
    res.send('api is running...')
})

app.use('/api/content', pageRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} port ${PORT}`.bgBlue.magenta))