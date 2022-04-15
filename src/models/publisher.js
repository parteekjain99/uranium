const mongoose = require('mongoose')



const newpublisherschema = new mongoose.Schema({
    name:String,
    headquater:String
},{timestamps:true})


module.exports = mongoose.model('Newpublisher' , newpublisherschema)