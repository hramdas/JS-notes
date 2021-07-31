function runProgram(input) {
var input = input.trim().split("\n")
// var input = input.split("\n")
// console.log(input)
var testcase = Number(input[0]);
var line = 1

for (var i=0; i<testcase; i++){
var size = Number(input[line])
line++
var arr = input[line].trim().split(" ").map(Number)
line++
var main = arr;
var size1 = size;
// console.log(main) 

function array_product(items){
    var prod = 1;

    for(var i = 0; i < items.length; i++){
        prod = prod*items[i];
    }
    return prod;
}

function item_product(numbers, product) {
    var products = [];
    for(var i = 0; i < numbers.length; i++){
        var i_prod = product/numbers[i];
        products.push(i_prod);
    }
    return products;
}

var nums = arr;
var prods = array_product(nums);
var i_prod = item_product(nums, prods);
console.log(i_prod.join(" "));


}
}
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`2
      5
      1 2 3 4 5
      3
      3 2 7`);   // INPUT
    } else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
        read += input;
      });
      process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }

    //D:\WEB11\July\july2 D:\WEB11\July\july2\code.js
    july6.js