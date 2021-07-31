function runProgram(input) {

var N = input;

for (i=1; i<=10; i++){
    output = N*i
    console.log(N + " x " + i + " = " + output)
} 

}



if (process.env.USERNAME === "hedga") {
  runProgram(`7`);   // INPUT
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