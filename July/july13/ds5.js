function runProgram(input) {
    input = input.trim().split(" ");

    out = []
    for (var i=input.length - 1; i >= 0; i--) {
        out.push(input[i])
    }
    console.log(out.join(" "))
   
}

if (process.env.USERNAME === "hedga") {
    runProgram(`A Transformation in education`);
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
  
  