const mongoose = require('mongoose');



const batchschema = new mongoose.Schema({
    name:String,
    size:Number,
    program: {
        enum:[ "backend" , "frontend"],
        type:String,
    }
},{timestamps:true})



module.exports =   mongoose.model('class1' , batchschema)