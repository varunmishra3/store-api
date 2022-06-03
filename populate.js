require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('success')
        Process.exit(0)
    } catch (err) {
        console.log(err);
        Process.exit(1)
    }
}

start()