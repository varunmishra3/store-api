require('dotenv').config()

const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const connectDB = require('./db/connect');

const productRouter = require('./routes/products')
const qrCodeRouter = require('./routes/qrCode')

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('<h1>Store API </h1><a href="/api/v1/products">Product Route</a>')
})

app.use('/api/v1/products', productRouter)
app.use('/api/v1/qrcode', qrCodeRouter)

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`) )
    } catch (error) {
    }
}

start()

