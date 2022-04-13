const author = require('../models/author');
const book = require('../models/book');



const x = async function(req,res){
    let dsta = req.body;
    let saved = await author.create(dsta)
    res.send(saved)
}


const y = async function (req,res){
    let data = req.body;
    let savedata = await book.create(data)
    res.send(savedata)
}


const z = async function(req,res){
    let a1 = await author.find({author:"nandini"})
    const id = a1[0].author_id
    const name1 = await book.find({author_id:id}).select({name:1})
    res.send(name1)
}


const j = async function(req,res){
   let a2 = await book.find({name: "fairy tailes"})
    let id = a2[0].author_id
    let athrnme = await author.find({author_id:id}).select({author:1 , _id:0})
     
     let boknme = a2[0].name
    let updateprice = await book.findOneAndUpdate({name:boknme} , {price:100}, { new: true}).select({price:1 , _id:0})

    res.send({msg: athrnme , updateprice})
   
}

const k = async function(req ,res){
    let a3 = await book.find( { price : { $gte: 50, $lte: 100} })
    let id = a3.map((x) => x.author_id)
    
    let arr = []
    for(let i=0; i<id.length;i++){
       let y = id[i]
       const booknames = await book.find({author_id:y}).select({name:1 ,_id:0})
       arr.push(booknames)
    }
     const k = arr.flat();
     res.send(k)
}

module.exports.x = x
module.exports.y = y
module.exports.z = z
module.exports.j = j
module.exports.k = k