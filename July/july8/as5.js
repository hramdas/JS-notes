function runProgram(input) {
    input=input.trim().split("\n")
    
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`Nrupul 32
    Prateek 30
    Aman 26
    Albert 28
    Yogesh 44`);
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
  