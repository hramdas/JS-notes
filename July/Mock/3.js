function runProgram(input) {

    var input = Number(input)
    var output = []
      for (i=1; i<=input; i++) {
        for (j=1; j<=input; j++)
        output.push( i*j + ' ' )
        output.push('\n')
      } 
      output = output.join('')
      console.log(output)


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