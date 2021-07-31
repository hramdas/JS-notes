function runProgram(input) {
    input = input.trim()
    conso = 'bcdfghjklmnpqrstvwxyz'
    
    out = 0
    for (var i = 0; i <input.length; i++)
    for (var j = 0; j <conso.length; j++) {
        if (input[i] == conso[j])
            out++
    }
    console.log(out)
   
  }
  if (process.env.USERNAME === "hedga") {
    runProgram(`masaischool`);
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
  
  