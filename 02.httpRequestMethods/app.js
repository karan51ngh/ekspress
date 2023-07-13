const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/checkpost', (req, res) => {
    const linux = [
        { id: 1, title: 'Arch' },
        { id: 2, title: 'Xubuntu' },
        { id: 3, title: 'Fedora' }
    ];

    res.json(linux);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})