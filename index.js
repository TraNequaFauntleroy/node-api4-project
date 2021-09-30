require('dotenv').config()
const cors = require('cors')
const express = require('express')

const server = express()

server.use(express.json())
server.use(cors())


server.get('/api/users', (req, res) => {
    res.send('<h1>List of Users</h1>')
})

server.post('/api/register', (req, res) => {
    res.send('<h1>Here is where you would register for an account</h1>')

})

server.post('/api/login', (req, res) => {
    res.send('<h1>Login Page</h1>')

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