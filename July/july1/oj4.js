function runProgram(input) {
var N = Number(input);
// console.log(N)

var factorial = 1;
for(i=1; i<=N; i++){
   factorial = factorial * i;
}
console.log(factorial)
}
    
    
    
if (process.env.USERNAME === "hedga") {
    runProgram(`5`);   // INPUT
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