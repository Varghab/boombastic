const mongoose = require('mongoose');
const { addressSchema } = require('./userModel');

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        default: "BOOMBASTIC" + new mongoose.Types.ObjectId(),
    },
    orderedAt: {
        type: Date,
        default: Date.now()
    },
    orderedBy:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    products:[
        {
            product:{
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity:{
                type:Number,
                required: true,
            }
        }
    ],
    price:{
        itemsPrice:{
            type: Number,
            default:0,
            required:true
        },

        taxPrice:{
            type: Number,
            default:0,
            required:true
        },
        
        shippingPrice:{
            type: Number,
            default:0,
            required:true
        },

        totalPrice:{
            type: Number,
            default:0,
            required:true
        },
    
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'delivered', 'cancelled'],
        default: 'pending',
    },
    payment:{
        id:{
            type: String,
            required: true
        },
        status:{
            type: String,
            required: true
        },
        mode: {
            type: String,
            required: true
        },
        paymentDate:{
            type:String,
        }
    },
    deliveredAt:{
        type: Date,
    },
    shippingAddress: addressSchema

}) 

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;