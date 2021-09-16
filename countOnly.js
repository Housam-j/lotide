const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 =  { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

const countOnly=function(firstNames, result1){
  res={};
  for (item in result1) {
    if (item === true) {
      if (firstNames.includes(item)) {
        res[item] +=1
      }
    }
  }
  return res;
}
console.log(countOnly(firstNames, result1));                                   



// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
