function runProgram(input) {
    input = input.trim().split('\n')
    var names = input[0].trim().split(' ')
    var ages = input[1].trim().split(' ').map(Number)
    var arr = []
    for(var i=0; i<names.length; i++){
        arr.push(
           { name : names[i],
            age : ages[i]}
        )
    }

    arr.filter((user)=>{
       if(user.age > 30){
           console.log(user.name)
       }
    })
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`Nrupul Prateek Aman Ankur  Albert Yogesh Sidharth 
    32 30 26 34 28 44 22`);
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
  