function runProgram(input) {

var input = input.split("\n")
var N = input[0];
var arr = input[1].trim().split(" ").map(Number);
console.log(arr)

var odd = 0;
var even = 0;
for (i=0; i<arr.length; i++)
if (arr[i]%2 !== 0){
    odd += arr[i]
} else if (arr[i]%2 == 0){
    even += arr[i]
}
//console.log(odd, even)
if (odd <= even){
    console.log('Even')
} else {
    console.log('odd')
}
}

    
    if (process.env.USERNAME === "hedga") {
      runProgram(`5
      2 2 2 3 3`);   // INPUT
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