
const tail = function(data) {
  let newarr = [];
  for (let i = 1; i < data.length; i++) {
    newarr.push(data[i]);
  }
  console.log(newarr);
};
tail([1, 2, 3]);