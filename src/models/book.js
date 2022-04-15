const mongoose = require('mongoose')
const objectid = mongoose.Schema.Types.ObjectId


const newbksme = new mongoose.Schema({
    bookname:String,
    author:{
        type:objectid,
        ref:'Newathrsme',
    },
    price:Number,
    rating:Number,
    publisher:{
        type:objectid,
        ref:'Newpublisher'
    },
} ,{timestamps:true})


module.exports = mongoose.model(' Newbooksme' , newbksme)









