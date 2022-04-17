const author = require('../models/author');
const publisher = require('../models/publisher');
const book = require('../models/book');
const { exists } = require('../models/book');
const { x } = require('./allcontroller');



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




const newbk= async function (req, res) {
    let data=req.body

    if (data.author && data.publisher) {
        let checkid = await author.exists({ _id: data.author })
        let check = await publisher.exists({ _id: data.publisher })
        if (checkid && check) {
            if (!await book.exists(data)) {
                let bookCreated = await book.create(data)
                res.send({ msg: bookCreated })
            } else res.send({ msg: "Book already exists" })
        }
        else res.send("AuthorId and publisherId  are Invalid")
    }
    else res.send ({msg: "Author and publisher are compulsory"})
}




let allbook = async function (req,res){
    let x = await book.find().populate( 'author').populate('publisher')
    res.send(x)
}





let collect = async function (req,res){
    // let data = req.body
    let all = await book.updateMany({publisher:"625a752d472fed9c7e2840a5"}, {$set:{isHardcover:true}},
    {new:true , upsert:true},)
    res.send(all)
}

let penguin = async function (req,res){
    // let data = req.body
    let all = await book.updateMany({publisher:"625934ca371905b59ee0260e"}, {$set:{isHardcover:true}},
    {new:true , upsert:true},)
    res.send(all)
}

let rating = async function(req,res){
    
    let oldprice = req.body.price
    let newprice = oldprice + 10
    let j = await book.find({rating:{$gt:3.5}}).select({rating:1, _id:0}).update({price:newprice})
    res.send(j)
}


module.exports.flip = newathr
module.exports.newpubr = newpubr
module.exports.newbk = newbk
module.exports.allbook = allbook
module.exports.all = collect
module.exports.penguin = penguin
module.exports.rating = rating








