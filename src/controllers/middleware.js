const order = require('../models/order');
const product = require('../models/product');
const user = require('../models/user');


const x = async function(req,res){
    let data = req.body
    const result = await product.create(data)
    res.send(result)
}



const y = async function(req,res){
    let data = req.body
    const result = await user.create(data)
    res.send(result)
}



const z = async function(req,res){
    let data = req.body
    const result = await order.create(data)
    res.send(result)
}



const createOrder = async function(req,res){
    let data = req.body
    let userId = req.body.userId
    let productId = req.body.productId
    let header = req.header["isfreeappuser"]
    let price = await product.find({price : productId})
    let userValidation  = await user.exists(userId)
    let productValidation = await product.exists(productId)
    if(userValidation){
        if(productValidation){
            let purschase = await order.create(data)
            if(header == true){
                await user.find({_id : userId}).update({balance: (balance-price)},{new:true})
                
            } res.send({success : purschase})
            
        }
        else res.send({err: "the product is not present"})
    }
   else res.send({alert: "you are not a registered user, please register"})
}

module.exports.createOrder = createOrder

module.exports.a = x
module.exports.b = y
module.exports.c = z
