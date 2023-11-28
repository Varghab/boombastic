const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController');
const {isAuthenticatedUser, authorizeRoles} = require('../middlewares/auth');
const router = express.Router();

router
    .get('/products', getAllProducts)
    .post('/product/new', isAuthenticatedUser, createProduct)
    .put('/product/:id', isAuthenticatedUser, updateProduct)
    .delete('/product/:id', isAuthenticatedUser, deleteProduct)
    .get('/product/:id', getProductDetails);

module.exports = router;