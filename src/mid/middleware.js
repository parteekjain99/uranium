const jwt = require("jsonwebtoken");


const mid1 = function(req,res,next) {

let token =  req.headers["x-auth-token"]
if (!token) return res.send({stats:false , msg:"token must be present"})
     console.log(token)
 let decodedToken =  jwt.verify(token, 'xyz@gmail.com-password')
  if(!decodedToken) return res.send({status:false, msg:"token is invalid"})
      next();
}



module.exports.a1 = mid1
