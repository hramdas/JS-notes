function runProgram(input) {
  var arr = input.split("\n");

  var numbers = arr[1];
  var n = numbers.split(" ").map(Number);
  var sum = 0;

  for( var i = 0; i< n.length; i++){
    sum = sum + n[i];
  }
  var average = sum/n.length;
  console.log(average)
}

if (process.env.USERNAME === 'hedga') {
  runProgram(`4\n2 5 0 9`);
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