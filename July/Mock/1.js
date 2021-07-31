function runProgram(input) {
    var input = input.split(" ");
    var a = input[0]**2;
    var b = input[1]**2;
    var c = input[2]**2;
    // console.log(a, b, c)

    if (a + b == c || a+c == b || b+c == a) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`3 4 5`);   // INPUT
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