function runProgram(input) {

var input = input.trim().split("\n");
var N = Number(input[0]);
var num = input[1].trim().split(" ").map(Number);
// console.log(N, num);

var min = num[0];
var max = num[0];

for (i=1; i<N; i++) { 
   if (num[i] < min) {
   min = num[i];
    }

   if(num[i] > max){
       max = num[i];
   }
}
 console.log(min)
 console.log(max)

}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`4
      -2 0 8 4`);   // INPUT
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