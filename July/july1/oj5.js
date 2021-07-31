function runProgram(input) {
    var N = input.split(" ").map(Number);
    // console.log(N)

    var left = N[0];
    var right = N[1];
    var k = N[2];
    var count = 0;
    // console.log(left, right, k)

    for (i=left; i<=right; i++){
        if(i%k == 0){
            count++
        }
    } console.log(count);

}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`1 10 1`);   // INPUT
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