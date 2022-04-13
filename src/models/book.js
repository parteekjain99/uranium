const mongoose = require('mongoose')



const newauthorschema = new mongoose.Schema({
    author_id:{
        type:Number,
        required:true
    },
    name:String,
    price:Number,
    rating:Number,
},{timestamps:true})


module.exports = mongoose.model('new-book' , newauthorschema)









