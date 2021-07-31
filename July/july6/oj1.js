//Multi-dimensional Arrays (IWY)
// Matrix Competition [OJ]

function sum(matrix) {
    var s = 0;
    for (var r =0; r < matrix.length; r++){
        for (var c =0; c < matrix[r].length; c++) {
            s = s + matrix[r][c];
        }

    }
    return s;
}


function runProgram(input) {
    var lines = input.split("\n")

    var rc1 = lines[0].trim().split(" ").map(Number)
    var r1 = rc1[0];
    var c1 = rc1[1];

    var matr1 = [];
    for (var i = 1; i<= r1; i++){
        var row = lines[i].trim().split(" ").map(Number);
        matr1.push(row)
    }


    var rc2 = lines[r1+1].split(" ").map(Number);
    var r2 = rc2[0];
    var c2 = rc2[1];

    var matr2 =[];
    for (var j = r1+2; j< lines.length; j++){
    var row = lines[j].trim().split(" ").map(Number)
    matr2.push(row)
    }

    sum1 = sum(matr1)
    sum2 = sum(matr2)
    
    if (sum1 > sum2){
    console.log(sum1)
    } else {
        console.log(sum2)
    }
    
}
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`3 4
      1 2 3 4
      0 5 6 1
      9 3 0 8
      2 2
      8 8
      8 8`);   // INPUT
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