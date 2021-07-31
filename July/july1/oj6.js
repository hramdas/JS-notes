function runProgram(input) {

var input = input.split(" ").map(Number);
// console.log(input)

var L = input[0];
var R = input[1];

for (i=L; i<=R; i*=2){
console.log(i);
}

}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`4 10`);   // INPUT
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