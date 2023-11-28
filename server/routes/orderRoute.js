const express = require('express');
const { createOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder } = require('../controllers/orderController');
const router = express.Router();
const {authorizeRoles, isAuthenticatedUser} = require('../middlewares/auth');


router
    .post('/createOrder', isAuthenticatedUser, createOrder)
    .get('/getSingleOrder/:id', isAuthenticatedUser, getSingleOrder)
    .get('/myOrders', isAuthenticatedUser, myOrders)
    .get('/getAllOrders', isAuthenticatedUser,authorizeRoles('admin'), getAllOrders)
    .put('/updateOrder/:id', isAuthenticatedUser,authorizeRoles('admin'),updateOrder)
    .delete('/deleteOrder/:id', isAuthenticatedUser,authorizeRoles('admin'), deleteOrder)

module.exports = router;