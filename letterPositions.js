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
