var a = 4;
var b = 5;

if (a < b) {
    console.log("A is smaller");
} else if (b < a) {
    console.log("B is smaller");
}


var password1 = "Secret";
var password2 = "Password";
if (password1 !== password2) {
    console.log("Wrong Password");
}


var num= 5;
if (num%2 == 1){
    console.log("Odd number");
}


var year = 2000;
var age = 2021 - year;
if (age >= 20 && age <=29) {
    console.log("Twenties");
}


// Decending Order
var a = 20;
var b = 22;
var c = 24;
if (a > b && a > c){
    if (b > c){
        console.log("a b c");
    } else{
        console.log("a c b");
    }
} else if (b > c && b > a){
    if (a > c){
        console.log("b a c");
    } else {console.log("b c a");
}
} else {
    if (a > b){
        console.log("c a b");
    } else {
        console.log("c b a")
    }
}


var c = 4;
var d = 5;
c > d ? console.log("c") : console.log("D");


switch (day) {
    case "Monday":
        console.log("Mon");
        break;
    case "Tuesday":
        console.log("Tue");
        break;
    case "Wednesday":
        console.log("Wed");
        break;
    case "Thurdsay":
        console.log("Thu");
        break;
    case "Friday":
        console.log("Fri");
        break;
    case "Saturday":
        console.log("Sat");
        break;
    case "Sunday":
        console.log("Sun")
    default:
        break;
}