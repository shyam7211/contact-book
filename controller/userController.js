const asyncHandler = require('express-async-handler');


//@desc Register User
//@route POST /api/user/register
//@access Public
const registerUser = asyncHandler (async (req, res) => {
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