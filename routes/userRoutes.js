const express = require('express');
const { userRegister, userLogin, userCurrent } = require('../controller/userController');
const router = express.Router();

router.post("/login", userLogin).post("/register", userRegister);

router.get("/current", userCurrent)

module.exports = router;