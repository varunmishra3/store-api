
const express = require('express')
const router = express.Router()

const { 
    getAllProducts,
    createProduct,
    deleteProduct,
    updateProduct } = require('../controllers/products')

router.get('/', getAllProducts)

router.post('/', createProduct)

router.delete('/:id', deleteProduct)

router.patch('/:id', updateProduct)

// router.get('/static', getAllProductsStatic)



module.exports = router;