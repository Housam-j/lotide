const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.assert(actual === expected,'Assertion failed: '+actual+' !== '+ expected)
  }  
};  
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  assertEqual(object1, object2)
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