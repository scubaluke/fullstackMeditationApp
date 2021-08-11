const express = require('express');
const data = require('./data');
const app = express()

app.get('/', (req, res) => {
    res.send('api is running...')
})

app.get('/api/data', (req, res) => {
    res.json(data)
})

app.get('/api/data/:page', (req, res) => {
    const page = data.find(p => p.pageName === req.params.page)
    res.json(page)
})

app.listen(5000, console.log('server running on port 5000'))