function runProgram(input) {
    input = input.trim()

    out = false
    for (i=0; i<input.length; i++) {
        if (input[i]+input[i+1]+input[i+2] == 420)
            out = true;
    }
    if (out == true){
        console.log("Caught")
    } else {
        console.log("Escaped")
    }
   
  }
  if (process.env.USERNAME === "hedga") {
    runProgram(`97421`);
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
  
  