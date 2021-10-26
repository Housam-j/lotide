const assertEqual = require('./assertEqual');

const tail = function(data) {
  let newarr = [];
  for (let i = 1; i < data.length; i++) {
    newarr.push(data[i]);
  }
  return (newarr);
};

module.exports = tail;
