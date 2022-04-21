const mongoose = require('mongoose')



const productschema = new mongoose.Schema({
    name:String,
    catagory:String,
    price:Number
}, {timestamps:true})


module.exports = mongoose.model('product' , productschema)