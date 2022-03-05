// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y()
// }
// x()

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z); //print function y

z(); // print 7  // Because closer

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
} //Print 5 five times
