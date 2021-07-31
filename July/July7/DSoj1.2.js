function runProgram(input) {
    var N = input;
    var num = 32;
    var A = Math.floor(num/N)
    // console.log(A)

    if (A == 0){
        console.log("Too Low")
    } else if (A <= 0 || N==0) {
        console.log(-1)
    } else{
        console.log(A)
    }
}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`0`);   // INPUT
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