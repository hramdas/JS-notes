function runProgram(input) {
    var input = input.trim().split('')
    


    
    var list = [];
    for (i=0; i < input.length; i++){
    var index = {};
    index.char = input[i];
    index.id = i;
    list.push(index);
    console.log(i)
    }


    // if (inpt[i] == '@' && input[i] == '.' && '@' !== input[0] && '@' !== input[input.length])

    // console.log(length)

    console.log(index)
    console.log(input.length)

}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`mysite@masaischool.com`);   // INPUT
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