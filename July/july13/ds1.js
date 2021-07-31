function runProgram(input) {
    var input = input.trim().split("\n");
    var N = Number(input[0])
   var num = input[1].trim().split(" ")
   
   oddSum = 0
    for (var i =0; i<N; i++) {
        if (Number(num[i]) % 2 !== 0) {
            oddSum += Number(num[i])
        }
    }  //console.log(oddSum)
    
   evenSum = 0
    for (var i = 0; i<N; i++) {
        if (Number(num[i]) % 2 == 0) {
            evenSum += Number(num[i])
        }
    }  //console.log(evenSum)

    if (oddSum>evenSum) {
        console.log("Odd")
    } else {
        console.log("Even")
    }  
   
}

if (process.env.USERNAME === "hedga") {
    runProgram(`4
    1 2 3 4`);
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
  
  