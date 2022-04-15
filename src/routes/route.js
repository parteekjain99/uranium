const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const allcontroller= require("../controllers/allcontroller")
const newcontroller= require("../controllers/newcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/updateBooks", BookController.updateBooks)
router.post("/deleteBooks", BookController.deleteBooks)

//MOMENT JS
const moment = require('moment');
router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    let x= dateB.diff(dateA, "days")
    console.log(x)

    res.send({ msg: "all good"})
})

router.post('/x', allcontroller.x)
router.post('/y', allcontroller.y)
router.get('/z', allcontroller.z)
router.get('/j', allcontroller.j)
router.get('/k', allcontroller.k)
router.post('/flip', newcontroller.flip)
router.post('/newpubr', newcontroller.newpubr)
router.post('/newbk', newcontroller.newbk)
router.get('/absentid', newcontroller.absentid)
router.get('/presentid', newcontroller.presentid)
router.get('/allbook', newcontroller.allbook)
module.exports = router;