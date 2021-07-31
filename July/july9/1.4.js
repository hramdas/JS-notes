function wordsFirstUpperNotFirst(input){
    var output = [];
    for(vari=0;i< input.length; i++){
        if (i == 0) {
            output.push(input[i]);
        } else {
            var upperWord = firstUpper(input[i]);
            output.push(upperWord);
        }
    } return output;
  
}

function firstUpper(input) {
    var output = "";
    for(var i = 0; i< input.length; i++) {
        if(i == 0){
            var uc =
        }
    }
}

function gwtUpperCase(input){
    var lc = 'abcdefghijklmnopqrstuvwxyz';
    var uc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i=0; i<uc.length; i++){
        if(input == lc[i]){
            return uc[i]
        }
    }
    return input;
}