const express = require('express');
const { registerUser, loginUser, currentUser } = require('../controller/userController');
const router = express.Router();

router.post("/login", loginUser).post("/register", registerUser);

router.get("/current", currentUser)

module.exports = router;