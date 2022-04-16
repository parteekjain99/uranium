const mongoose = require('mongoose')
const objectid = mongoose.Schema.Types.ObjectId


const newbksme = new mongoose.Schema({
    bookname:String,
    author:{
        type:objectid,
        ref:'Newathrsme',
        validate(value){
            if(value !== objectid)
             throw new Error(" author id is not valid")
        },
    },
    price:Number,
    rating:Number,
    publisher:{
        type:objectid,
        ref:'Newpublisher',
        validate(value){
            if(value !== objectid)
             throw new Error(" publisher id is not valid")
        },
    },
} ,{timestamps:true})


module.exports = mongoose.model(' Newbooksme' , newbksme)









