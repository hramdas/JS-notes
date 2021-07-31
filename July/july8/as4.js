function runProgram(input) {
    input = input.trim().split("\n")
    var obj = {}
    for (var i = 0; i < input.length; i++){
        var item = input[i].trim().split(" ")
        if (obj[item[0]]==undefined){
            obj[item[0]]= [item[1]]
        } else {
            obj[item[0]].push(item[1])
        }
    }
    var skill = "js"
    var names =[]

    for (key in obj) {
        for (var i = 0; i < obj[key].length; i++){
            if (skill === obj[key][i]){
                names.push(key)
                break
            }
        }
    } console.log(names) 
   
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
    Nrupul sql`);
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
  