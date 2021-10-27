const middle = function(arr) {
  let l =  arr.length / 2;
  let elem = [];
  if (arr.length === 1) {
    console.log(elem);
  } else if (arr.length %   2 !== 0) {
    elem.push(arr[Math.ceil(l) - 1 ]);
    console.log(elem);
  } else if (arr.length % 2 === 0) {
    // console.log (l);
    elem.push((arr)[l - 1],(arr[l]));
    console.log(elem);
  }
  // console.log(elem);
};


module.exports = middle;
