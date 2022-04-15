const author = require('../models/author');
const publisher = require('../models/publisher');
const book = require('../models/book');



const newathr = async function(req,res){
    let data = req.body
    let saved = await author.create(data)
    res.send(saved)
}


const newpubr = async function(req, res){
    let data1 = req.body
    let savedata = await publisher.create(data1)
    res.send(savedata)
}


const newbk = async function(req, res){
    let data2 = req.body
    let savedata1 = await book.create(data2)
    res.send(savedata1)
}


let absentid = async function(req , res) {
    let a = req.body
    let checkid = await author.findById({_id:req.body.author})
    if(checkid){
        res.send(a)
    } else{
        res.send({msg: "author is not valid"})
    }
}


let presentid = async function(req , res){
    let b = req.body
    let check = await publisher.findById({_id:req.body.publisher})
    if(check){
        res.send(b)
    }else{
        res.send({msg:"publisher is not present"})
    }
}


let allbook = async function (req,res){
    let x = await book.find().populate( 'author').populate('publisher')
    res.send(x)
}





module.exports.flip = newathr
module.exports.newpubr = newpubr
module.exports.newbk = newbk
module.exports.absentid = absentid
module.exports.presentid = presentid
module.exports.allbook = allbook








