function runProgram(input) {
  var input = input.trim().split("\n");
    var t = Number(input[0])
    // console.log(input.length)

    
  for (var i = 1; i<input.length; i++){
    num = input[i]
    out = []
    for (var j = 1; j<=10; j++){
      res = num*j
      out.push(res) 
    } //out.push("\n")
    console.log(out.join(" ")) 
  }

}
  
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    2
    3`);   // INPUT
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