function runProgram(input) {

    var input = input.trim().split("\n");
    var N = Number(input[0]);
    var arr = input[1].trim().split(" ").map(Number);
    // console.log(arr);

    var sum = 0;
    for(i=0; i < arr.length; i++){
        sum += arr[i]
    }
            console.log(sum/N);
   
}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`4
      2 5 0 9`);   // INPUT
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