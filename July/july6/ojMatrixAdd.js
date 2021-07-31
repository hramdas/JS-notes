function runProgram(input) {

  var input = input.trim().split("\n")
  var line0 = input[0].trim().split(" ").map(Number)

  var [r1, c1, r2, c2] = line0

    var line = 1
    var mat1 =[], mat2=[]

  for (var i=0; i<r1; i++){
    mat1.push(input[line].trim().split(" ").map(Number))
    line++
  }
  for (var i = 0; i < r2; i++){
    mat2.push(input[line].trim().split(" ").map(Number))
    line++
  }

  if(r1 !== r2 || c1 !== c2){
    console.log("-1")
  }
  else {
    for (var i = 0; i < r1; i++){
      for (var j=0; j < c1; j++){
        mat1[i][j] = mat1[i][j] + mat2[i][j]
      }
    }

      for (var i=0; i<r1; i++){
        console.log(mat1[i].join(" "))
      
      } 
  }
}
    
    
if (process.env.USERNAME === "hedga") {
  runProgram(`2 2 2 2
  1 2
  3 4
  2 3
  4 5`);   // INPUT
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