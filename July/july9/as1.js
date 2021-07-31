// camelCase snakeCase hypenCase

function runProgram(input) {
var str = input.trim().split(" ")
var length = input.length


function stringToLower(input){
  var output = "";
  for (var i = 0; i< input.length; i++) {
      var lc = characterToLower(input[i]);
      output = output + lc;
  }
  return output;
}

function characterToLower(input){
    var lc = 'abcdefghijklmnopqrstuvwxyz';
    var uc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i=0; i<uc.length; i++){
        if(input == uc[i]){
            return lc[i]
        }
    }
    return input;
}
console.log(stringToLower(input))



function getWords(input) {
  var words = [];
  var word = "";
   for (var i=0; i < input.length; i++){
       if (input[i] != " ") {
           word = word + input[i];
       } else {
           if(word.length>0){
               words.push(word);
               word ="";
           }
       }
   } if (word.length > 0){
       words.push(word);
   }
  return words
}


// function joinWOrds (['A', 'B', 'C'], "-") {

// }

// function wordsFirstUpperNotFirst(['a', 'b','c']){

// }


function camelCase() {
    up = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z' ]

    low = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z']

    out = []
    for (i=0;i<length;i++)
    if (input[i])

    var str = input[0]
    var strA = str[0]
    console.log(strA)

} camelCase()

}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`Early Monday morning MUSIC`);   // INPUT
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