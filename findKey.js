const findKey = function(obj , callback) {
  for (let item in obj) {
    if (callback(obj[item])) {
      return item;
    }
  }
  return undefined;
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.assert(actual === expected,'Assertion failed: ' + actual + ' !== ' + expected);
  }
};
module.exports = findKey;