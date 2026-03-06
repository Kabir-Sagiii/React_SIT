var data = [10, 20, 30, 40];

var newArray = data.map(function (element, index) {
  var result = element * 100;
  return result;
}); // [1000,2000,3000,4000]

//[1000,2000,3000,4000]

console.log(newArray);
