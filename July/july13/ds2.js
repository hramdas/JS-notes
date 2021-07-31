function runProgram(input) {
  var input = input.trim().split("\n")
  var test = input[0]

  line = 1
  for (var i=0; i<test; i++) {
    var size = Number(input[line])
    line++
    var arr = input[line].trim().split(" ").map(Number)
    line++
    console.log(size, arr)

    
  } 
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    2
    1 1
    6
    1 2 1 2 3 1
    `);
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
  
  
  