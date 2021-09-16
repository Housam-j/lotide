const middle = function(array) {
  let l =  array.length / 2;
  let elem = [];
  if (array.length === 1) {
    console.log(elem);
  } else if (array.length %   2 !== 0) {
    elem.push(array[Math.ceil(l) - 1 ]);
    console.log(elem);
  } else if (array.length % 2 === 0) {
    // console.log (l);
    elem.push((array)[l - 1],(array[l]));
    console.log(elem);
  }
  // console.log(elem);
};
middle([1, 2, 7 , 4, 5, 6]);
middle([1, 2, 3, 5, 6]);
middle([8,12, 23, 85, 76, 45]);