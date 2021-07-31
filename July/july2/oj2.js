function runProgram(input) {
 var input = input.trim().split("\n")
 var line1 = input[0].split(' ')
 var N = line1[0];
 var x = line1[1];
 var question = input[1].trim().split(" ").map(Number)
  // console.log(question)
  // console.log(N)

 function maxScore(){
   count = 0
   xCount = 0
   for (var i =0; i < N; i++){
     if (question[i] <= x){
       count++
     } else xCount++
       if (xCount == 2)
       break
   }
   return count
 } console.log(maxScore())
}

if (process.env.USERNAME === "hedga") {
    runProgram(`7 6
    4 3 7 6 7 2 2
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
  
  