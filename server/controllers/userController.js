const CatchAsyncError = require('../middlewares/CatchAsyncError');
const UserModel = require('../models/userModel');
const ErrorHandler = require('../utils/ErrorHandler');
const sendEmail = require('../utils/email');
const sendToken = require('../utils/jwtToken');
const crypto = require('crypto');

// -------------------------------------- USER API CONTROLLERS ------------------------------------------//

//Sign up user
exports.createUser = CatchAsyncError(async(req,res,next)=>{
    const {name, email, password} = req.body;
    const existing = await UserModel.findOne({email});
    if(existing){
        return next(new ErrorHandler(400, "User already exists!"))
    }
    const user = await UserModel.create({
        name,
        email,
        password,
        avatar:{
            public_id:"demoId",
            url:"demourl"
        }
    })
    sendToken(user, 201, res);
})

//login User
exports.loginUser = CatchAsyncError(async(req,res,next)=>{
    const {email, password} = req.body;    
    if(!email||!password){
        return next(new ErrorHandler(401,"Please enter email or password"));
    }
    const user = await UserModel.findOne({email}).select('+password'); 
    if(!user){
        return next(new ErrorHandler(401, "Invalid email or password"));
    }
    const matchedPassword = await user.comparePassword(password);  
    if(!matchedPassword){
        return next(new ErrorHandler(401, "Invalid email or password"));
    }

    sendToken(user, 200, res);

});

//logout user
exports.logoutUser = CatchAsyncError(async(req,res,next)=>{
    res.cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly:true
    });
    res.status(200).json({
        success:true,
        message:"Logged Out"
    })
})

//forget password
exports.forgetPassword = CatchAsyncError(async(req,res,next)=>{
    const {email} = req.body;
    const user = await UserModel.findOne({email});
    if(!user){
        return next(new ErrorHandler(403, `${email} doesn't exist!`));
    } 
    const resetToken = user.getResetToken();
    await user.save({validateBeforeSave: false});
    const resetURL = `${req.protocol}://${req.get('host')}/api/v1/resetPassword/${resetToken}`
    const subject = "Boombastic password recovery";
    const message = `Hey, this is your reset password link \n\n ${resetURL}`;
    try {
        await sendEmail({to: user.email, subject, message});
        res.status(200).json({
            success:true,
            message:`Password reset link sent to ${email}`
        })
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({validateBeforeSave:false});
        return next(new ErrorHandler(500, "Error sending password reset link!"))
    }
})

//resetpassword
exports.resetPassword = CatchAsyncError(async(req,res,next)=>{
    const resetToken = req.params.token;
    const {oldPasswordGivenByUser, newPasswordGivenByUser} = req.body;
    const user = await UserModel.findOne({resetPasswordToken:crypto.createHash('sha256').update(resetToken).digest('hex')}).select('+password'); 
    if(!user){
        return next(new ErrorHandler(403, "User doesn't exist or you have already updated the password!"));
    }
    const {resetPasswordExpire} = user;
    if(Date.now()>resetPasswordExpire){
        return next(new ErrorHandler(403, "Password reset link has been expired!"));
    }
    const passwordMatched = await user.comparePassword(oldPasswordGivenByUser);
    if(!passwordMatched){
        return next(new ErrorHandler(403, "Old password doesn't match, please try again!"));
    }
    user.password = newPasswordGivenByUser;
    user.resetPasswordExpire = undefined;
    user.resetPasswordToken = undefined;
    await user.save({validateBeforeSave:false})
    res.status(203).json({
        success:true,
        message:"Your password has been updated!"
    })

})

exports.updatePassword = CatchAsyncError(async(req,res,next)=>{
    const {oldPass, newPass, confirmPass} = req.body;
    const user = await UserModel.findById(req.user.id).select('+password');
    const isMatched = await user.comparePassword(oldPass);
    if(!isMatched){
        return next(new ErrorHandler(401,"Old password didn't match!"));
    }
    if(newPass!==confirmPass){
        return next(new ErrorHandler(401,"Confirm password and new password has to be same!"));
    }
    user.password = newPass;
    await user.save();
    sendToken(user, 200, res);
})

exports.getMyProfile = CatchAsyncError(async(req,res,next)=>{
    const user = await UserModel.findById(req.user.id);
    if(!user){
        return next(new ErrorHandler(401,"User doesn't exist"));
    }
    res.status(200).json({
        success:true,
        user
    })

})

exports.updateProfile = CatchAsyncError(async(req,res,next)=>{
    const {name, email} = req.body;

    
    // Cloudinary will be implemented later


    const user = await UserModel.findByIdAndUpdate(req.user.id, {name,email},{
        new:true,
        runValidators: true,
    })
    res.status(200).json({
        success: true,
        user
    })
})

// -------------------------------------- ADMIN API CONTROLLERS ------------------------------------------// 

exports.getAllUsers = CatchAsyncError(async(req,res,next)=>{
    const allUsers = await UserModel.find();
    res.status(200).json({
        success: true,
        allUsers
    })
})

exports.updateRole = CatchAsyncError(async(req,res,next)=>{
    const {role} = req.body;
    const user = await UserModel.findByIdAndUpdate({_id: req.params.id},{ role },{
        new:true,
        runValidators: true,
    })
    res.status(200).json({
        success: true,
        user
    })
})

exports.getSingleUser = CatchAsyncError(async(req,res,next)=>{
    const id = req.params.id;
    const user = await UserModel.findById(id);
    if(!user){
        return next(new ErrorHandler(400, "User doesn't exist!"))
    }
    res.status(200).json({
        success: true,
        user
    })
})

exports.deleteUser = CatchAsyncError(async(req,res,next)=>{
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);
    if(!user){
        return next(new ErrorHandler(400, "User doesn't exist!"))
    }
    res.status(200).json({
        success:true,
        message: "User Deleted!"
    })
    
})
