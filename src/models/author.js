const mongoose = require('mongoose')



const newbookschema = new mongoose.Schema({
    author_id:{
        type:Number,
        required:true
    },
    author:String,
    age:Number,
    address:String
},{timestamps:true})


module.exports = mongoose.model('new-author' , newbookschema)