const mongoose = require('mongoose')


const clientschema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    mobile:Number,
    email:String,
    password:String,
    age:Number,
    gender:{
        type:String,
        enum:["male" ,"female" ,"others"]
    },
    isdeleted:{
        type:Boolean,
        default:false
    },
},{timestamps:true})

module.exports = mongoose.model('client', clientschema)