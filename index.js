require('dotenv').config()
const path = require('path')
const cors = require('cors')
const express = require('express')
const exp = require('constants')

const server = express()

server.use(express.json())
server.use(cors())
server.use(express.static(
    path.join(__dirname, 'client/build')
))

server.get('/api/users', (req, res) => {

})

server.post('/api/register', (req, res) => {
    
})

server.post('/api/login', (req, res) => {
    
})

server.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, 'client/build, index.html')
    )
})

const port = process.env.PORT || 3000

server.listen(port, ()=>{
    console.log(`listening on ${port}`)
})