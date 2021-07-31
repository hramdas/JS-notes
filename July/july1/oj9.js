function runProgram(input) {

    var input = input.trim().split(" ").map(Number);
    // console.log(input)
    var sum = 0;
    var sum1 = 0;

    for (j=1; j<=(input.length+1); j++){
       sum += j;  // Sum of Numbers
    } for (i=0; i<input.length; i++) {
      sum1 += input[i]; //Sum of inputs
    } 
    console.log(sum - sum1)
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