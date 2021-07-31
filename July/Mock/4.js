function runProgram(input) {
 var input = Number(input);

 var output = []
 for (i=1; i<=input; i++){
    for (j=1; j<=input; j++){
        if (i==1 || j==1 || i==input || j==input) {
        output.push('* ')
    } else {
        output.push("  ")
    }
    }  output.push("\n")
    } 

  //   var out = []
  //  for (var a = 0; a<output.length; a++)
  //  out.push(output[a])

   out = output.join('')
   console.log(out)

}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`4`);   // INPUT
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