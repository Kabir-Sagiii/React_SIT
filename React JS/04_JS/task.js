//case 1

// function parent() {
//   var x = 10;
//   console.log(x);
// }

// parent();

//case 2
// function parent() {
//   var x = 10;
//   function child() {
//     var y = 20;
//     console.log(x, y);
//   }

//   child();
// }

// parent();

function parent() {
  var x = 10;
  function child() {
    var y = 20;
    console.log(x, y);
  }

  return child;
}

var childFn = parent();

childFn();
