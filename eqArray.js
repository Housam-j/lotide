const assertEqual = require('./assertEqual');

const eqArrays = function (arr1,arr2){
  if (arr1.length === arr2.length) {
    for (let i = 0 ; i < arr1.length ; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(arr1 === arr2,'Assertion failed: ' + arr1 + ' !== ' + arr2)
        return false;
      }
    }  console.log( "Assertion Passed " + arr1 + '===' + arr2);
  }
}


module.exports= eqArrays;
