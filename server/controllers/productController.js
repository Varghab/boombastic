const CatchAsyncError = require('../middlewares/CatchAsyncError');
const Product = require('../models/productModel');
const ApiFeatures = require('../utils/ApiFeatures');
const ErrorHandler = require('../utils/ErrorHandler');

//create a product -- admin
exports.createProduct = CatchAsyncError(async(req,res,next)=>{
    req.body.user = req.user.id;
    const product = await Product.create(req.body);
    res.status(201).json({success:true, product});
});

//get all products
exports.getAllProducts = CatchAsyncError(async(req,res,next) => {
    let resultsPerPage = 5;
    const apifeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultsPerPage);
    const products = await apifeature.query;
    res.status(200).json({success:true, products});
})

//get product details
exports.getProductDetails = CatchAsyncError(async(req,res,next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler(500, "Product Not Found!"));
    }
    res.status(200).json({
        success:true,
        product
    })
})

//update a product -- admin
exports.updateProduct = CatchAsyncError(async(req,res,next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler(500, "Product Not Found!"))
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(200).json({
        success:true,
        product
    })
})

//delete a product -- admin
exports.deleteProduct = CatchAsyncError(async(req,res,next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler(500, "Product Not Found!"))
    }
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success:true,
        message: "Product deleted successfully"
    })

})

