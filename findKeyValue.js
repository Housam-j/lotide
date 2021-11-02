const findKeyValue = function(input, val) {
  for (let key in input) {
    if (input[key] === val) {
      return key;
    }
  }
  return false;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.assert(actual === expected,'Assertion failed: ' + actual + ' !== ' + expected);
  }
};

module.exports = findKeyValue;