function runProgram(input) {
 var input = input.trim().split("\n")
 var test = Number(input[0])

 for (var i = 1; i <=test; i++){
     arr = input[i].trim()
     out = []
     for (var j = 0; j < arr.length; j++){
         if (arr[j] !== arr[j+1]){
             out.push(arr[j])
         }
     } console.log(out.join(""))
  }
 
}

if (process.env.USERNAME === "hedga") {
    runProgram(`3
    abb
    aaab
    ababa`);
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
  
  