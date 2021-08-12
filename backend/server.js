const express = require('express');
require('dotenv').config();
const data = require('./data');
// const home = require('./data');
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

app.listen(5000, console.log('server running on port 5000'))