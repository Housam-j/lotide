const findKeyValue = function(input, val ) {
  for (let key in input){
    if (input[key] === val){
      return key;
    }
  }
  return false;
};
console.log(findKeyValue({
  'first':'Satursay',
  'Second':'Sunday',
  'third':'Monday',
  'forth':'Thursday',
  'six':  'Friday'
    } ,'Sunday'))    