// 1. Reverse obj
// 2. Vowels Count
// 3. change Case
//Reverse obj

var special = {
    item: "masai",
    reverse: function() {
        var out = '';
        for(var i = this.item.length-1; i>=0; i--){
            out = out + this.item[i] 
            }
        return out;
    },  

            //Vovels count
    vowelsCount: function() {  
        var count = 0;
        var vowels = 'aeiouAEIOU';
        for (var i=0; i< this.item.length; i++) {
            for (var j=0; j<vowels.length; j++) {
                if (this.item[i] == vowels[j]) {
                    count++; 
                    break;
                }
            }
        }
        console.log("Vowels Count - " + count);
        // console.log()
    }, 
    changeCase: function() {
        var lower = 'abcdefghijklmnopqrstuvwxyz';
        var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var out = '';
        for (var i = 0; i<this.item.length; i++){
            var char = this.item[i];
            var caseChar = null;
            //Checking if
            for(var j=0; j<lower.length; j++){
                if (char == lower[j]){
                    caseChar = upper[j];
                    break;
                }
            }
            // if char not found in lower
            // check & convert from upper to lower
            if (caseChar == null) {
                for (var j = 0; j < upper.length; j++){
                    if(char == upper[j]){
                        caseChar = lower[j];
                        break;
                    }
                }
            }
            if(caseChar != null) {
                out = out + caseChar;
            } else {
                out = out + char;
            }
        }
        console.log(out);
    }
}

special.reverse()
// special.item = "FireFox"
console.log(special.reverse());
special.vowelsCount()
special.changeCase()


// console.log(special)