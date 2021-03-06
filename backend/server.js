import express from 'express';
import dotenv from 'dotenv'
import 'colors'
import connectDB from './config/db.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import pageRoutes from './routes/pageRoutes.js'
import UserRoutes from './routes/userRoutes.js'
import ProductRoutes from './routes/ProductRoutes.js'

dotenv.config();
connectDB()
const app = express()
app.use(express.json())


app.get('/', (req, res) => {
    res.send('api is running...')
})

app.use('/api/content', pageRoutes)
app.use('/api/users', UserRoutes)
app.use('/api/products', ProductRoutes)


// error handler middleware
app.use(notFound)
app.use(errorHandler)




const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} port ${PORT}`.bgBlue.magenta))