function runProgram(input) {
var lines = input.split("\n");
// console.log(lines);
var data = [];
for (var i=0; i< lines.length; i++){
    // console.log(lines[i]);
    var item = lines[i].split(" ");
    // console.log(item);
    var n = item[0];
    var a = Number(item[1]);
    var user = {};
    user.name= n;
    user.age =a;
    // console.log(user);
    data.push(user);
    // console.log(data);
}
for (var i =0; i< data.length; i++){
    if(data[i].age >38){
        console.log(data[i].name);
    }
}
}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`Nrupul 32\nPrateek 30\nAman 26\nAlbert 28\nYogesh 44`);   // INPUT
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