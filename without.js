const without = function (input , no) {
  var res =[];
  for (let i=0 ; i < input.length ; i++) {
    if (input[i] !== no){
      res.push(input[i]);
    }
  }
  return res;
};

console.log(without('Lighthouse', 'g'))