var num = [1, 2, 3, 4, 5, 6];

// prints one value only

var sum = num.reduce(function(ac, el){ 
    return el
},0) 
console.log(sum) //==6


var sum = num.reduce(function(ac, el){ 
    return el + ac
}) 
console.log(sum); // == 21


var sum = num.reduce(function(ac, el){ 
    return el+ac
},100) 
console.log(sum) //==6


oddCheck = function(el){
    if(el % 2 == 0){
        return false;
    } else {
        return true;
    }
}
odds = num.filter(oddCheck)
console.log(odds)

var addTwo = function(ac, el){
    return ac + el
}
console.log(num.reduce(addTwo))

console.log(odds.reduce(addTwo)) //sum odd numbers

