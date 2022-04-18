const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const programe= require("../controllers/programe")

router.post('/rating1',programe.a)
router.post('/rating2',programe.b)
router.get('/rating3', programe.c)
router.get('/rating4', programe.d)


module.exports = router;