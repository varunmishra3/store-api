

const Products = require('../models/product')

const getAllProducts = async (req, res) => {
    const products = await Products.find(req.query)
        .sort('price')
    return res.status(200).json({products, nbHits: products.length})
}
const getAllProductsStatic = async (req, res) => {
    const products = await Products.find(req.query)
    return res.status(200).json({products, nbHits: products.length})
}

const createProduct = async (req, res) => {
    const productUpload = await Products.create(req.body);
    return res.status(200).json({msg: 'Item created successfully', productUpload})
}

const deleteProduct = async (req, res) => {
    try{
        const {id: productID} = req.params
        const product = await Products.findOneAndDelete({_id: productID})
        if(!product) {
            res.status(404).json({msg: `Item with ID: ${productID} not found`})
        }
        res.status(200).json({success: true})
    } catch(err){
        
    }
}

const updateProduct = async (req, res) => {
    try{
        const {id: productID} = req.params
        
        const product = await Products.findOneAndUpdate({_id: productID}, req.body, {
            new: true,
            runValidators: true
        })
        if(!product) {
            res.status(404).json({msg: `Item with ID: ${productID} not found`})
        }
        res.status(200).json({success: true})
    } catch(err){
        
    }
}


module.exports = {
    getAllProducts,
    getAllProductsStatic,
    createProduct,
    deleteProduct,
    updateProduct
}
