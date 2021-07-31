function runProgram(input) {
 var input = input.trim().split("\n");
 var N = Number(input[0])

 var arr = input[1].trim().split(' ').map(Number)
 var testcase = Number(input[2])
 //console.log(typeof arr[4])
  
  for (var i = 3; i< testcase + 3; i++) {
   num = Number(input[i])
  

    var list = []
    for (a = 0; a < N; a++) {
    if ((arr[a]) > (num)){
      list.push(Number(arr[a]));
    }
    }

    if (list.length == 0){
        console.log("-1")
      } else{
      var out = list[0]
      for (j=0; j<list.length; j++){
      if (out < list[j]){
        out = out
      } else { out = list[j]
      }
    
      } console.log(out)
    }
  }

}
     

  if (process.env.USERNAME === "hedga") {
      runProgram(`10
      13 89 81 66 -1 63 71 76 73 81
      3
      65
      15
      90`);   // INPUT
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