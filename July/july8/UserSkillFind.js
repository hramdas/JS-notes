function runProgram(input) {
    input = input.trim().split('\n')
    var n = input.length
    var obj = {}
    for(var i=0; i<n; i++){

        let line = input[i].trim().split(' ')
        if(obj[line[0]] = obj[line[0]]){
            obj[line[0]] = []
        } else obj[line[0]] = []
    }

    for(let j=0; j<n;j++){
        var line = input[j].trim().split(' ')
       obj[line[0]].push(line[1])
    }

    for(key in obj){
        if(obj[key].includes("ds")){
            console.log(key)
        }
    }
  

    // console.log(obj)//
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`Nrupul cmd
    Prateek js
    Aman ds
    Nrupul python
    Albert js
    Albert react
    Aman algo
    Prateek html
    Nrupul sql
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