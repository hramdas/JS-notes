var names = ["Nrupul", "Ramdas", "Yogesh", "Rohan"];
var numbers = [1, 2, 3, 4, 5, 6];


var odds = numbers.filter(function(el){
    if(el % 2 == 0){
        return false;
    } else {
        return true;
    }
})
console.log(odds);

oddCheck = function(el){
    if(el % 2 == 0){
        return false;
    } else {
        return true;
    }
}
console.log(oddCheck())

odds = numbers.filter(oddCheck)
console.log(odds);


