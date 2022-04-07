let printdate = () => {
let currentdate = new  Date()
console.log(currentdate.toDateString());
    
} 


const printmonth = function() {
let currentdate  = new Date() 
console.log(currentdate.getMonth() + 1)
} 



const getbatchinfo = function() {

console.log('uranium ,u24')

} 




module.exports.b = printdate
module.exports.c = printmonth
module.exports.d = getbatchinfo