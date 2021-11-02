const middle = function(arr) {
  let l =  arr.length / 2;
  let elem = [];
  if (arr.length === 1) {
    return elem;
  } else if (arr.length %   2 !== 0) {
    elem.push(arr[Math.ceil(l) - 1 ]);
    return elem;
  } else if (arr.length % 2 === 0) {
    elem.push((arr)[l - 1],(arr[l]));
    return elem;
  }
};

module.exports = middle;
