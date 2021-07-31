var obj = {
    anagram : ['wind', 'dwine'],

    anagramMethod : function() {
        var str1 = this.anagram[0].split("").sort()
        var str2 = this.anagram[1].split("").sort()

        if(str1.join("") == str2.join("")) return true
        else return false
    }
};

out = obj.anagramMethod()
if (out == true){
console.log("TRUE")
} else {
    console.log("FALSE")
}