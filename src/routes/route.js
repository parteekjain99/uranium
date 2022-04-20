const express = require('express');
const app = express();;
const router = express.Router();
const programe= require("../controllers/programe")
const assignment = require("../controllers/assignment");

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






module.exports = router;