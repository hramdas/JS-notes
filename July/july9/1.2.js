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

console.log(getWords("A transformation   in Edu"))
