const findKeyValue = function(input, val) {
  for (let key in input) {
    if (input[key] === val) {
      return key;
    }
  }
  return false;
};

console.log(findKeyValue({
  'first':'Satursay',
  'Second':'Sunday',
  'third':'Monday',
  'forth':'Teusday',
  'fifth':'Wednesday',
  'sixth':'Thursday',
  'seventh':'Friday'
} ,'Teusday'));

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.assert(actual === expected,'Assertion failed: ' + actual + ' !== ' + expected);
  }
};

assertEqual(findKeyValue({
  'first':'Satursay',
  'Second':'Sunday',
  'third':'Monday',
  'forth':'Teusday',
  'fifth':'Wednesday',
  'sixth':'Thursday',
  'seventh':'Friday'
} ,'Sunday'), 'Second');
