var x = 10;

function outer() {
  var y = 9999;

  function inner() {
    var z = 11;
    console.log(x, y, z);
  }

  inner();
  console.log(x, y, z);
}

outer();
