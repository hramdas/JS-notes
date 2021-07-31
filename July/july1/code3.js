var input = "42509";
var lines = input.split("");

console.log(input);
console.log(lines);

console.log(lines[0]);
console.log(lines[1]);

var Number_string = lines[1];
console.log(Number_string);

var numbers_arr = Number_string.split(" ");
console.log(numbers_arr);

// convert to Number
var numbers_arr = Number_string.split(" ").map(Number);
console.log(numbers_arr);
