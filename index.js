require('dotenv').config()
const cors = require('cors')
const express = require('express')

const server = express()

server.use(express.json())
server.use(cors())


server.get('/api/users', (req, res) => {
    res.status(200).json({
        message: "way to go!"
    })
})

server.post('/api/register', (req, res) => {
    res.status(201).json({
        message: "Yayyy!"
    })
})

server.post('/api/login', (req, res) => {
    res.status(400).json({
        message: "Booo You cannot be here!"
    })
    
})

server.get('*', (req, res) => {
    res.status(404).json({
        message: "something went wrong"
    })
    
})

const port = process.env.PORT || 3000

server.listen(port, ()=>{
    console.log(`listening on ${port}`)
})