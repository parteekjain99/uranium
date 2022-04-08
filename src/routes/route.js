const express = require('express');


const welcome = require('../logger/logger');
const printdate = require('../util/helper');
const printmonth = require('../util/helper');
const getbatchinfo = require('../util/helper');
const trim = require('../validator/formatter');
const lowercase = require('../validator/formatter');
const uppercase = require('../validator/formatter');
const lodash = require('lodash')

const router = express.Router();



router.get('/test-me', function (req, res) {
   
    welcome.a();
});


router.get('/test-me1', function (req, res) {
   
    printdate.b()
});

router.get('/test-me2', function (req, res) {
   
    printmonth.c();
});

router.get('/test-me3', function (req, res) {
   
    getbatchinfo.d()
});

router.get('/test-me4', function (req, res) {
   trim.e()
    
});

router.get('/test-me5', function (req, res) {
   lowercase.f();
    
});

router.get('/test-me6', function (req, res) {
   uppercase.g()

});


router.get('/hello', function (req, res) {
   let array = ['jan','feb','mar','april','may','june','july','agu','sept','oct','nov','dec']
   let subArrays = lodash.chunk(array,3)
  console.log(subArrays)
});


router.get('/hello1', function (req, res) {
   let oddnumber = [1,3,5,7,9,11,15,17,19,21,23,27]
   console.log(lodash.tail(oddnumber))
   res.send('hjkhgjj')
});

router.get('/hello2', function (req, res) {
   let number = [1,3,2,4,6]
   let number1 = [1,3,5,7.9]
   console.log(lodash.union(number,number1))
   
});

router.get('/hello3', function (req, res) {
   let number = [['horrer','abc'],['drama' , 'titanic']]
   const obj = console.log(lodash.fromPairs(number))
   console.log(obj)
});


router.get('/movies', function (req, res) {
   const arr2 = ["rand de basnasti" , "the shining", "lord of the rings", "bartman begins"]


   res.send(arr2)
   
});


router.get('/movies/:indexnumber', function (req, res) {
     const value = req.params.indexnumber

   const arr = ["rand de basnasti" , "the shining", "lord of the rings", "bartman begins"]
   const arrlen = arr.length
   if (value < arrlen) {
      res.send(arr[value])
   } else {
      let str = "use a valid index"
      res.send(str)
   }

});

router.get('/films', function (req, res) {
   
   const arr4 = [
      {
         id: 1, 
         name: "The Shining"
        },
      {
         id: 2, 
         name: "lord of rings"
        },
      {
         id: 3, 
         name: "pk"
        },
      {
         id: 4, 
         name: "attack"
        },
   ]

  const a = arr4.map((x) => x.name).flat();{
     console.log(a)
     res.send(a)
  }
   
});


router.get('/films/:id', function (req, res) {
   const value = req.params.id

   const arr = [
      {
         id: 1, 
         name: "The Shining"
        },
      {
         id: 2, 
         name: "lord of rings"
        },
      {
         id: 3, 
         name: "pk"
        },
      {
         id: 4, 
         name: "attack"
        },
   ]


 
    res.send(arr[value])
 

});




module.exports = router;
// adding this comment for no reason