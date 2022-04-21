require('dotenv').config()
const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 9000

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use(express.static('public'));


server.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

// get route to return index.html
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

server.listen(PORT, () => {
    console.log(`Sever listening at http://localhost:${PORT}`);
})