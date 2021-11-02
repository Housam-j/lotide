const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countOnly   = require('./countOnly');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
};