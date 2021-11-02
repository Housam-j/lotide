const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.assert(actual === expected,'Assertion failed: '+actual+' !== '+ expected)
  }  
};  


const eqObjects = function(object1, object2) {
  for (let item in object1) {
    assertEqual(object1[item], object2[item]);
    if (false ) {
      return false
    }
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba);

const assertObjectsEqual= function (obj1, obj2) {
  for (let item in obj1){

    if ( obj1[item][key] !== obj2[item][key] || obj1[item] !== obj2[item]){
      console.log('🛑🛑🛑',Obj1 !== obj2,'Assertion failed');
      return false;
    }
  }
  console.log('✅✅✅' , `Assertion Passed: ${obj1} ===  ${obj2}`);
}
module.exports =eqObjects;