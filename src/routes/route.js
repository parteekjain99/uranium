const express = require('express');

const router = express.Router();
const programe= require("../controllers/programe")
const assignment = require("../controllers/assignment");
const middleware = require("../controllers/middleware");
const auth = require("../controllers/auth");
const mid = require("../mid/middleware");

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






router.get('/rating5', mid1 , assignment.a)
router.post('/rating6' , middleware.a)
router.post('/rating7' , middleware.b)
router.post('/rating8' , middleware.c)
// router.post('/createorder' ,   middleware.createOrders)


router.post('/createorder1' ,   auth.login)
router.post('/createorder2' ,   auth.user)
router.get('/createorder3/:userId'  ,mid.a1,  auth.getUser)
router.put('/createorder4/:userId' , mid.a1 ,  auth.update)
router.put('/createorder5/:userId' , mid.a1 ,  auth.delete)








module.exports = router;