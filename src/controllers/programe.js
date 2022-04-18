const developer = require('../models/developer');
const batch = require('../models/batch');
const { query } = require('express');



const batches = async function(req,res){
    let data = req.body
    let newdata = await batch.create(data)
    res.send(newdata)
}


const developers = async function(req,res){
    let data1 = req.body
    let newdata1 = await developer.create(data1)
    res.send(newdata1)
}

const scolorship = async function(req,res){
    // let data = req.body
    let newdata = await developer.find({$and:[{percentage:{$gte:70}} , {gender:"female"} ]});
    res.send(newdata)
}

const developers1 = async function(req,res){
    let data = req.query
     let result = await developer.find({$and:[{percentage:{$gte:data.percentage}} , {program: data.program} ]})
     res.send( result)
}


module.exports.a = batches
module.exports.b = developers
module.exports.c = scolorship
module.exports.d = developers1