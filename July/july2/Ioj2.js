function runProgram(input) {
var input = input.trim()
var length = input.length
var half = Math.floor(length/2)
var halfCeil = Math.ceil(length/2)

function stringCut(){
   
    cut1 = []
    for (i=half-1; i>=0; i--){
        cut1.push(input[i])
    }

    cut2 = []
    for (i=length-1; i>=halfCeil; i--){ 
        cut2.push(input[i]) }
    
    final = cut1.join('') + cut2.join('')
    finalOdd = cut1.join('') + input[half] + cut2.join('')

    if (length % 2 == 0) {
      console.log(final)
    } else { console.log(finalOdd)}

} stringCut()

}
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`gfiAkbg`);   // INPUT
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