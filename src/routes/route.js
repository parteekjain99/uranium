const express = require('express');
const app = express();;
const router = express.Router();
const programe= require("../controllers/programe")
const assignment = require("../controllers/assignment");
const middleware = require("../controllers/middleware");

router.post('/rating1',programe.a)
router.post('/rating2',programe.b)
router.get('/rating3', programe.c)
router.get('/rating4', programe.d)


const mid1 = function(req,res,next) {
     
    let loggedin = true
    if (loggedin == true) {
        next()
    }
    else {
       res.send("error")
    }
}


const mid2 = function(req,res,next) {
      let isfreeappusers = false
    if ( isfreeappusers == false) {
        next();
    }
    else {
       res.send("request is missing")
    }
}



router.get('/rating5', mid1 , assignment.a)
router.post('/rating6' , middleware.a)
router.post('/rating7' , middleware.b)
router.post('/rating8' , middleware.c)
router.post('/createorder' ,   middleware.createOrder)







module.exports = router;