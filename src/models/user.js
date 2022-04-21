const mongoose = require('mongoose')


const userschema = new mongoose.Schema({
    name:String,
    balance:String,
    address:String,
    age:Number,
    gender:{
        type:String,
        enum:["male" ,"female" ,"others"]
    },
    isfreeappusers:{
        type:Boolean,
        default:false
    },
},{timestamps:true})

module.exports = mongoose.model('user1', userschema)