const letterPositions = function(sentence) {
  const res = {};
  for (let i = 0; i < sentence.length; i++) {
    if (res[sentence[i]]) {
      res[sentence[i]].push(i);
      console.log(res[sentence[i]]);
    } else {
      res[sentence[i]] = [i];
    }
  }
  return res;
};
console.log(letterPositions('LighthouseLabs'));

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.assert(actual === expected,'Assertion failed: '+actual+' !== '+ expected)
  }  
};

const  assertArraysEqual = function(arr1,arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i] &&  arr1[i].type === arr2[i].type) {
        console.log(arr1 === arr2,'Assertion failed');
        return false;
      } else {
        console.log('Assertion Passed');
        return true;
      }
    }
  }
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
