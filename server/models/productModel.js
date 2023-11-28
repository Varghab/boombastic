const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter a Product name"],
        trim:true
    },
    description:{
        type: String,
        required: [true, "Please enter a Product description"]
    },
    price:{
        type: Number,
        required: [true, "Please enter a Product price"],
        maxLength: [8, "Price can't exceed 8 digits"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type: String, 
                required:true
            },
            url:{
                type: String, 
                required:true
            }
        }
    ],
    category:{
        type: String,
        required: [true, "Please enter a product category"]
    },
    stock:{
        type: Number,
        required: [true, "Please enter a product stock"],
        maxLength: [4, "Stock can't exceed 4 digits"],
        default: 1
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required: true,
            }, 
            comment:{
                type:String,
                required:true
            }
        }
    ],
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Product", productSchema);