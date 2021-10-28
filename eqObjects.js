const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.assert(actual === expected,'Assertion failed: ' + actual + ' !== ' + expected);
  }
};

const eqObjects = function(object1, object2) {
  for (let item in object1) {
    assertEqual(object1[item], object2[item]);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "5" };
eqObjects(ab, ba);
