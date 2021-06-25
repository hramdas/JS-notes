console.log('Masai School')
console.log("welcome")

var birth = 1998
var age = 2021 - birth
console.log(age);

var name = "Ramdas" ;
console.log("My Name is " + name);
name = "Ganpat";
console.log("My Father's name is " + name);
name = "Sangita";
console.log("My Mother's name is " + name);

var side = 5;
var area = side ** 2;
var perimeter = side * 4;
console.log(area);
console.log(perimeter);

var a = 2;
var b = 3;
var c = 4;
var sum = a + b + c;
var product = a * b * c;
console.log(sum);
console.log(product);

var num = 25;
var square = num ** 2;
var root = num ** 0.5;
console.log("Square + " + square);
console.log("Square Root + " + root);

var num1 = "5";
var num2 = "4";
var sum = Number(num1) + Number(num2);
var product = Number(num1) * Number(num2);
var diff = Number(num1) - Number(num2);
console.log("Sum = " + sum);
console.log("Product = " + product);
console.log("Difference = " + diff);

var choco = 25;
var pen = 35;
var child = 4;
var chocoLeft = choco % child;
var penLeft = pen % child;
console.log("Chocolates left = " + chocoLeft);
console.log("Pencils Left = " + penLeft);

var inSalery = 5000;
var inInterest = 1000;
var exRent = 2000;
var exTravel = 500;
var exFood = 1000;
var exMedical = 800;
var income = inSalery + inInterest;
var expense = exRent + exTravel + exFood + exMedical;
console.log("Remaining amount = " + (income - expense));