function runProgram(input) {
var input = input.split("\n")
var N = input[0];
var int = input[1].trim().split(" ")

var count = 0;
for (i=0; i<int.length; i++) 
    if (int[i] == 42){
        count++
    }
    if (count>0){
        console.log("Yes")
    } else {
        console.log("No")
    }
    
}
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`5
      3 7 0 2 8`);   // INPUT
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