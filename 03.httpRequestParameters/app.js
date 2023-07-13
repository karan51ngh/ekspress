const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.get('/qry', (req, res) => {
    const first = req.query.first;
    const second = req.query.second;
    res.send(`The query parameters entered by you are: ${first} and ${second}`)
})

app.get('/hdr', (req, res) => {
    console.log(req.headers)
    const first = req.headers.first;
    const second = req.headers.second;
    res.send(`The header parameters entered by you are: ${first} and ${second}`)
})

app.get('/bdy', bodyParser.json(), (req, res) => {
    console.log(req.body)
    const first = req.body.first;
    const second = req.body.second;
    res.send(`The body parameters entered by you are: ${first} and ${second}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})