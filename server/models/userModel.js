const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');


const addressSchema = {
    name:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true,
        minLength: [10, "Please enter a valid mobile number"],
        maxLength: [10, "Please enter a valid mobile number"]
    },
    pincode:{
        type: Number,
        required: true,
        minLength: [6, "Please enter a valid pincode"],
        maxLength: [6, "Please enter a valid pincode"],
    },
    locality:{
        type: String,
        required: true,
    },
    building:{
        type: String,
        required: true,
    },
    landmark:{
        type: String,
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    addresstype:{
        type: String,
        default: 'Home'
    }
}

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: [true, "Please enter your name"],
        maxLength: [30, "Name can't exceed 30 characters"],
        minLength: [4, "Name should have more than 4 chracters"]
    },
    email:{
        type: String,
        require:[true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email!"]
    },
    password:{
        type: String,
        require:[true, "Please enter your password"],
        minLength: [8, "Password should have greater than 8 chracters"],
        select:false
    },
    avatar:{
        public_id:{
            type: String, 
            required:true
        },
        url:{
            type: String, 
            required:true
        }
    },
    role:{
        type: String,
        enum: ["user","admin"],
        default: "user"
    },
    address:[addressSchema],
    resetPasswordToken: String,
    resetPasswordExpire: Date,

});

userSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.generateJWT = function() {
    const token = jwt.sign({id:this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
    return token;
}

userSchema.methods.comparePassword = async function(password){
    const res = await bcrypt.compare(password, this.password);
    return res;
}

userSchema.methods.getResetToken = function(){
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.resetPasswordToken = hashedResetToken;
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;
    return resetToken;
}

const userModel = mongoose.model('User', userSchema);
module.exports = {userModel, addressSchema};
