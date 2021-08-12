import express from 'express';
import dotenv from 'dotenv'
import 'colors'
import connectDB from './config/db.js';
import data from './data.js';

dotenv.config();
connectDB()
const app = express()

app.get('/', (req, res) => {
    res.send('api is running...')
})

app.get('/api/data', (req, res) => {
    res.json(data)
})

app.get('/api/data/home', (req, res) => {
    res.json(home)
})

app.get('/api/data/:page', (req, res) => {
    res.json(data[req.params.page])
})
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} port ${PORT}`.bgBlue.magenta))