function runProgram(input) {

    var r =input.trim().split("\n");
    // console.log(r);

  for(var b=1;b<r.length;b++){
      var c = r[b];
    //   console.log(c);

      var s = c.split(" ").map(Number);
      console.log(s);

      if(s[0]+s[1] > s[2] && s[2]+s[1] >s[0] && s[0]+s[2] >s[1]){
      var f = ("yes");
      } else {
        f =("no");
      }
        console.log(f);
    }
  }
    if (process.env.USERNAME === 'hedga') {
      runProgram(`4
4 5 13
7 1 8
2 5 4
2 2 2
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