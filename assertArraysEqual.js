const eqArrays = require('./eqArray');

const  assertArraysEqual = function (arr1,arr2){
  if (arr1.length === arr2.length){
    for ( let i = 0 ; i < arr1.length ; i++) {
      if ( arr1[i] !== arr2[i] &&  arr1[i].type=== arr2[i].type) {
        console.log(arr1 === arr2,'Assertion failed')
        return false;         
      } else {
        console.log('Assertion Passed');
        return true;
        } 
    }
  }
};
 module.exports = assertArraysEqual;