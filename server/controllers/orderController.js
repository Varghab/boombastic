const CatchAsyncError = require('../middlewares/CatchAsyncError');
const Order = require('../models/orderModel');
const { populate } = require('../models/productModel');
const ApiFeatures = require('../utils/ApiFeatures');
const ErrorHandler = require('../utils/ErrorHandler');


// -------------------------------------- USER API CONTROLLERS ------------------------------------------//

// ------- CREATE A ORDER -------- //

exports.createOrder = CatchAsyncError(async(req,res,next)=>{
    const orderedBy = req.user.id;
    const {products, price, shippingAddress, payment } = req.body;
    const order = new Order({
        products,
        price,
        shippingAddress,
        payment,
        orderedBy
    });
    if(!order){
        return next(new ErrorHandler(400, "Something went wrong, please try again!"));
    }
    await order.save();
    res.status(200).json({
        success:true,
        message:"Your order has been placed!"
    })

})

// ------- MY ORDER -------- //

exports.myOrders = CatchAsyncError(async(req,res,next)=>{
    const orders = await Order.find({orderedBy: req.user._id}).populate({
        path:"products",
        populate:{
            path:"product",
            select:"name description images category"
        }
    });
    if(!orders){
        return next(new ErrorHandler(400,"You don't have any orders!"))
    }
    res.status(200).json({
        success:true,
        orders
    })
})

// ------- GET SINGLE ORDER -------- //

exports.getSingleOrder = CatchAsyncError(async(req,res,next)=>{
    const order = await Order.findById(req.params.id).populate({
        path:"orderedBy",
        select:"name email"
    })
    if(!order){
        return next(new ErrorHandler("User not found with this ID!"))
    }
    res.status(200).json({
        success:true,
        order
    })
})


// -------------------------------------- ADMIN API CONTROLLERS ------------------------------------------// 

// ------- GET ALL ORDERS -------- //

exports.getAllOrders = CatchAsyncError(async(req,res,next)=>{
    const orders = await Order.find()
    let total = 0;
    if(!orders){
        return next(new ErrorHandler(400,"You don't have any orders!"))
    }
    orders.forEach((order)=>{
        total+=order.price.totalPrice;
    })
    res.status(200).json({
        success:true,
        orders,
        total
    })
})

// ------- UPDATE ORDER -------- //

exports.updateOrder = CatchAsyncError(async(req,res,next)=>{
    const order = await Order.findById(req.params.id).populate({
        path:"products",
        populate:{
            path:"product",
            select:"name stock"
        }
    });
    if(!order){
        return next(new ErrorHandler(400,"Order not found with this ID!"))
    }
    const {status} = req.body;
    if(order.status === 'delivered'){
        return next(new ErrorHandler(400,"Product already deliverd"))
    }
    if(status==='delivered'){
        order.status = "delivered";
        order.deliveredAt = Date.now();
        order.products.forEach((item)=>{
            item.product.stock-=1;
        })
    }
    else{
        order.status = status;
    }
    await order.save({validateBeforeSave:false})
    res.status(200).json({
        success:true,
        order
    })
})

// ------- DELETE ORDER -------- //

exports.deleteOrder = CatchAsyncError(async(req,res,next)=>{
    const order = await Order.findByIdAndRemove(req.params.id);
    if(!order){
        return next(new ErrorHandler(400, "order doesn't exist!"))
    }
    res.status(200).json({
        success:true,
        message: "order Deleted!"
    })
})