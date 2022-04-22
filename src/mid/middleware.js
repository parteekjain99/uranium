const jwt = require("jsonwebtoken");



const mid1 =  async function(req,res,next)  {
    let user = req.params.userId
let token =  req.headers["x-auth-token"];
if (!token) return res.send({stats:false , msg:"token must be present"})
    
 let decodedToken = await jwt.verify(token, "xyz@gmail.com-password")
   
  if(!decodedToken) 
  return res.send({status:false, msg:"token is invalid"})
  
  if(decodedToken.userId != user) 
    return  res.send("not a valid user")
      
     next()
}





module.exports.a1 = mid1
