const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');


//@desc Register User
//@route POST /api/user/register
//@access Public
const registerUser = asyncHandler (async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All feilds are required to register.")
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User with this email already exist.");
    }
    const hassedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username, email, password: hassedPassword,
    });
    console.log(`User Created ${user}`);
    if(user){
        res.status(201).json({_id: user.id, email: email})
    }else{
        res.status(400);
        throw new Error("User data not valid.")
    }

    res.json({message: "Register user"});
});


//@desc Login User
//@route POST /api/user/login
//@access Public
const loginUser = asyncHandler (async (req, res) => {
    res.json({message: "Login user"});
});


//@desc Current User
//@route GET /api/user/current
//@access Public
const currentUser = asyncHandler (async (req, res) => {
    res.json({message: "Current user"});
});

module.exports = {registerUser, loginUser, currentUser}