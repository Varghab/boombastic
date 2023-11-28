const {userModel} = require("../models/userModel");
const ErrorHandler = require("../utils/ErrorHandler");
const CatchAsyncError = require("./CatchAsyncError");
const jwt = require('jsonwebtoken');

exports.isAuthenticatedUser = CatchAsyncError(async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        const err = new ErrorHandler(401, "Please log in first!");
        return next(err);
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    req.user = user;
    next();
})

exports.authorizeRoles = (...roles) => {
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(403, `${req.user.name.toUpperCase()} is not authorized to access this page!`));
        }
        next();
    }
}

