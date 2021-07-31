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
console.log(stringToLower('CoverT'))