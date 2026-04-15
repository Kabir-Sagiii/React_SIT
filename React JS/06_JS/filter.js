var data = [10, 20, 30, 40];
//[20,30,40]

var value = data.filter(function (element, index) {
  var result = element > 10;
  return result; // true or false
  //[20,30,40]
});

console.log(value);
