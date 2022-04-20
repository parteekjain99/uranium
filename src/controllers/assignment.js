

const a = function(req,res , next) {
    let x = req.socket.remoteAddress
    let d = new Date
    console.log(x + " " + d + " " + "/rating5")
      res.send(x + " " + d + " " +"/rating5")
}


module.exports.a = a

