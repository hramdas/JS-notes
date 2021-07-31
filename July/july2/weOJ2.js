function runProgram(input) {
  var input = input.split("\n");
  var N = input[0];
  var num = input[1].trim().split(" ").map(Number);

  // console.log(N);

  // console.log(num);
  // var output = []

  for (i = 0; i < N-1; i++)
    if (2 == num[i]){
  console.log(num[i+1])
  break }
  if (num[i] !== 2 || N == 1 || num[N-1] == 2)
  console.log(-1)
  }
        
        
        
  if (process.env.USERNAME === "hedga") {
    runProgram(`5
    5 6 1 4 2`);   // INPUT
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
