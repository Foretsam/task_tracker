const cors = require('cors')
const express = require('express')
const productsRouter = require('./products')
const app = express()

app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))

app.use(express.json())

app.use('/products', productsRouter)

app.get('/', (req, res) => {
    res.send('Hello from Express')
})

app.get('/about', (req, res) => {
    res.send('This is the about page')
})

app.get('/message', (req, res) => {
    res.json({message: "Hello from your express backend"})
})

app.post('/message', (req, res) => {
    const {name, message} = req.body

    console.log('New message: ', name, message)
    res.json({message: 'Thank you for your message'})
})

app.listen(3000, () => {
    console.log('The server is running')
})