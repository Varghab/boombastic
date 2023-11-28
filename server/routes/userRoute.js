const express = require('express');
const { createUser, loginUser, logoutUser, forgetPassword, resetPassword, updatePassword, getAllUsers, getMyProfile, updateRole, getSingleUser, deleteUser, updateProfile } = require('../controllers/userController');
const router = express.Router();
const {authorizeRoles, isAuthenticatedUser} = require('../middlewares/auth');


router
    //-----------------USER ROUTES------------------------------// 
    .post('/createUser', createUser)
    .post('/loginUser', loginUser)
    .get('/logout', isAuthenticatedUser, logoutUser)
    .post('/forgetPassword', forgetPassword)
    .patch('/resetPassword/:token', resetPassword)
    .put('/updatePassword', isAuthenticatedUser ,updatePassword)
    .get('/getMyProfile', isAuthenticatedUser, getMyProfile)
    .put('/updateProfile', isAuthenticatedUser, updateProfile)
    //----------------ADMIN ROUTES------------------------------//
    .get('/getAllUsers', isAuthenticatedUser, authorizeRoles('admin'), getAllUsers)
    .put('/updateRole/:id', isAuthenticatedUser, authorizeRoles('admin'), updateRole)
    .get('/getSingleUser/:id', isAuthenticatedUser, authorizeRoles('admin'), getSingleUser)
    .delete('/deleteUser/:id', isAuthenticatedUser, authorizeRoles('admin'), deleteUser)

module.exports = router;