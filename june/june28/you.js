var a = 5;
var b = 7;
if (a > b) {
    console.log("A is Larger");
} else if ( a < b) {
    console.log("B is larger");
}

// Password Check
var pass1 = "Password";
var pass2 = "Secure";
if (pass1 !== pass2){
    console.log("Wrong Password");
} else if (pass1 == pass2){
    console.log("Valid Password");
}

// Odd Even
var num = 22;
if (num % 2 == 1){
    console.log("Odd Number");
} else{
    console.log("Even number");
}


var year = 2005;
var age = 2021 - year;
if (age >= 13 && age <= 19){
    console.log("Teenage");
} else if (age >= 20 && age <= 29){
    console.log("Twenties");
}


var x = 18;
var y = 22;
var z = 20;
// Descending Order
if (x > y){
    if (y > z){
        console.log("x y z");
    } else {
        console.log("x z y")
    }
} else if (y > x){
    if (x > z){
        console.log("y x z");
    } else {
        console.log(" y z x")
    }
} else {
    if (x > y){
        console.log("z x y")
    } else{
        console.log("z y x")
    }
}
// Ascending Order
if (x > y){
    if (y > z){
        console.log("z y x");
    } else {
        console.log("y z x")
    }
} else if (y > x){
    if (x > z){
        console.log("z x y");
    } else {
        console.log(" x z y")
    }
} else {
    if (x > y){
        console.log("y x z")
    } else{
        console.log("x y z")
    }
}

// Terinary Operator
var a = 5;
var b = 6;
a == b ? console.log("Equal") : console.log("Different");


// Switch
switch (month) {
    case "January":
        console.log("Jan");
        break;
    case "February":
        console.log("Feb");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("Apr");
        break;
    case "May":
        console.log("May");
        break;
    case "June":
        console.log("June");
        break;
    case "July":
        console.log("July");
        break;
    case "Auguest":
        console.log("Aug");
        break;
    case "September":
        console.log("Sep");
        break;
    case "Octomber":
        console.log("Octo");
        break;
    case "November":
        console.log("Nov");
        break;
    case "December":
        console.log("Dec");
        break;
    default:
        break;
}