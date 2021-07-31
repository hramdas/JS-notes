function runProgram(input) {

var input = input.split(" ").map(Number);

var high = input[0];
var sum = 0;
var sum1 = 0;

for (i=1; i<=input.length+1; i++){
sum += i;
} for (j = 0; j < input.length; j++) {
    sum1 += input[j]
}
    console.log(sum-sum1)


}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`4 5 1 3`);   // INPUT
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