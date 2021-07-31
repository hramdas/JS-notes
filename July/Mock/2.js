function runProgram(input) {
var input = input.split(" ")
var a = Number(input[0]);
var b = Number(input[2]);
var c = input[1];

if (c == '*' ){
    console.log(a*b)
} else if (c == '+') {
    console.log(a + b)
} else if (c == '-') {
    console.log(a-b)
} else if (c == '/') {
    console.log(a/b) }

}
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`2 + 3`);   // INPUT
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