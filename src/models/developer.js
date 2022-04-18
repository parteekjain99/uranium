const mongoose = require('mongoose')
const objectid = mongoose.Schema.Types.ObjectId


const developerschema = new mongoose.Schema({
    name:String,
    gender:{
        enum: ["male" , "female" , "others"],
        type:String,
    },
    percentage:Number,
    batch:{
      type:objectid,
      ref:'class1',
    },
},{timestamps:true})



module.exports =  mongoose.model('develop' , developerschema)