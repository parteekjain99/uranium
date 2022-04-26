const clientside = require('../models/clientside')
const jwt = require("jsonwebtoken");


const user = async function(req,res){
    let data = req.body
    let savedata = await clientside.create(data)
    res.send(savedata)
}





const loginUser = async function (req, res) {
    let userName = req.body.email;
    let password = req.body.password;
  
    let user = await clientside.findOne({ email: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "email or the password is not corerct",
      });
  
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        email:"admin@gmail.com",
        password: "admin1234",
      },
      "xyz@gmail.com-password"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, data: token });
  };
  



  const getUser = async function (req, res) {
    try{
    let userId = req.params.userId;
    let userDetails = await clientside.findById(userId);
    if (!userDetails)
      return res.status(404).send({ status: false, msg: "No such user exists" });
  
    res.send({ status: true, data: userDetails });
  }
  catch(error){
    res.status(400).send({msg: error.message});
  }
  };


  const update = async function (req, res) {
    try{
    let userId = req.params.userId
     const result = await clientside.findById(userId).updateMany({lastname:"jain"})
     if(!result) return res.send({status:false , msg:"no such user exist"})

     res.send({status:true, data:result})

}catch(error){
  res.status(400).send(error)
}
  }
 


const isdeleted = async function (req, res) {
    let userId = req.params.userId
     const result = await clientside.findById(userId).updateMany({isdeleted:true})
     if(!result) return res.send({status:false , msg:"no such user exist"})

    else res.send({status:true, data:result})

}



module.exports.user = user
module.exports.login = loginUser
module.exports.getUser = getUser
module.exports.update = update
module.exports.delete = isdeleted