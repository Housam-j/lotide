const countLetters = function(sent) {
  let res = {};
  for (let item of sent) {
    if (res[item]) {
      res[item] += 1;
    } else {
      res[item] = 1;
    }
  }
  return res;
};
console.log(countLetters("LighthouseLab"));


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.assert(actual === expected,'Assertion failed: ' + actual + ' !== ' + expected);
  }
};
