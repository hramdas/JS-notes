// Restaurant Bill
var item1Price = 80;
var item2Price = 140;
var item1Quantity = 6;
var item2Quantity = 3;
var iTotal = (item1Price * item1Quantity) + (item2Price * item2Quantity)

var tax = 10;
var discount = 8;
var tip = 50;

// console.log(iTotal);

var total = ((iTotal) * ((100+tax)/100) * ((100-discount)/100)) + tip;
console.log(total);