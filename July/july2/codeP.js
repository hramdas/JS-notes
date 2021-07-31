function divisibleBy3 (number){
    if (number%3 == 0) {
    return true;
    } else{
        return false;
    }
}
// console.log(divisibleBy3(3));
// console.log(divisibleBy3(7));

var limit = 20;

for(var i = 1; i<= limit; i++){
   var outcome = divisibleBy3(i);
    if (outcome){
        console.log(i);
    }
}

//--------------------------------------------------
// Lower to Upper
function toUpperCase(char){
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (var i= 0; i < lower.length; i++){
        if (lower[i] == char){
            return upper[i];
        }
    }

}
console.log(toUpperCase("r"));

//-------------------------=------------------------
function isPrime(n){
for(var i = 2; i< n; i++) {
    if (n % i == 0){
        return false;
    }
}
return true;
}
console.log(isPrime(21));

//-----------------------------------------

var nums = [1, 4, 5, 9, 2, 9, 7, 2];{
    function getHighest(numbers) {
        var high = numbers[0];
        for (var i = 1; i< numbers.length; i++){
            if (numbers[i]>high) {

            }
        }
    }
}  //NOT COMPLETE


function isVowel(char) {
    var vowels = ['a', 'e', 'i', 'o', ]
}