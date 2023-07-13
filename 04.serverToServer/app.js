const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.get('/', (req, res) => {
    const fir = req.query.first;
    const sec = req.query.second;
    const sum = fir + sec;
    res.send({ "sum": sum });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})