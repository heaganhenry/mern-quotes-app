const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.listen(1337, () => {
    console.log('Server started on 1337')
})