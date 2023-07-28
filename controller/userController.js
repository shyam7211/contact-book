const asyncHandler = require('express-async-handler');


//@desc Register User
//@route POST /api/user/register
//@access Public
const userRegister = asyncHandler (async (req, res) => {
    res.json({message: "Register user"});
});


//@desc Login User
//@route POST /api/user/login
//@access Public
const userLogin = asyncHandler (async (req, res) => {
    res.json({message: "Login user"});
});


//@desc Current User
//@route GET /api/user/current
//@access Public
const userCurrent = asyncHandler (async (req, res) => {
    res.json({message: "Current user"});
});

module.exports = {userRegister, userLogin, userCurrent}