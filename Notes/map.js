var names = ["Nrupul", "Ramdas", "Yogesh", "Rohan"];
var numbers = [1, 2, 3, 4, 5, 6];

// creat new array of same size
var squares = numbers.map(function(el) {  
    return el*el;
})
console.log(squares);  


// function squares(el){
//     return el*el
// }
// console.log(squares);


var str_len = function(input){
    return input.length
}
var names_len = names.map(str_len)
console.log(names_len)



