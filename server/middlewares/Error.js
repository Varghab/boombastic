const ErrorHandler = require("../utils/ErrorHandler");

function Error(err, req, res, next){
    if(res.headersSent){
        next(err);
    }
    else if(err instanceof ErrorHandler){
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        })
    }
    //MongoId error
    else if(err.name === "CastError"){
        const message = `Resource not found! Invalid: ${err.path}`
        err = new ErrorHandler(400, message);
    }
    return res.status(500).json({
        success:false,
        message: err.message || "Internal Server Error"
    })
}

module.exports = Error;