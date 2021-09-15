const eqArrays = function (arr1,arr2){
  if (arr1.length === arr2.length){
    for ( let i = 0 ; i < arr1.length ; i++) {
      if ( arr1[i] !== arr2[i] &&  arr1[i].type=== arr2[i].type) {
        console.log(arr1 === arr2,'Assertion failed: '+arr1+' !== '+ arr2)
        return false;         
      } else {
        console.log(`Assertion Passed: ${arr1} ===  ${arr2}`);
        return true;
        } 
    }
  }
}


eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
