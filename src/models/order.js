const mongoose = require('mongoose')
 const objectid = mongoose.Schema.Types.ObjectId


const orderschema =new mongoose.Schema({
    userID:{
        type:objectid,
         ref:'user1'
    },
    productId:{
        type:objectid,
        ref:'product'
    },
    amount:Number,
    isfreeappuser:Boolean,
    date:Number,
},{timestamps:true})

module.exports = mongoose.model('order' , orderschema)