const bookschema = require("../models/bookschema")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const createUser1= async function (req, res) {
    let data1 = req.body
    let savedData1= await bookschema.create(data1)
    res.send({msg: savedData1})
}

const getUsersData1= async function (req, res) {
    let allUsers1= await bookschema.find()
    res.send({msg: allUsers1})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createUser1 = createUser1
module.exports.getUsersData1 = getUsersData1