function runProgram(input) {
    input = input.trim().split("\n")
    console.log(input)

    matrix = []
    for (var i = 0; i < input.length; i++){
        matrix.push(input[i].trim().split(" "))
    }
    console.log(matrix)

    for (var i = 0; i < matrix.length; i++){
        for (var j = 0; j <= i; j++){
            console.log(matrix[j][i])
        }
    }


    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1 2 3
    5 6 7
    7 8 9`);
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
  