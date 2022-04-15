const mongoose = require('mongoose')



const athrschema = new mongoose.Schema({
    authorName:String,
    age:Number,
    address:String,
    rating:Number
},{timestamps:true})


module.exports = mongoose.model('Newathrsme' , athrschema)