const express = require('express');
const router = express.Router();
const bookschema = require("../models/bookschema.js")
const userModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createUser1", UserController.createUser1  )

router.get("/getUsersData1", UserController.getUsersData1)



module.exports = router;