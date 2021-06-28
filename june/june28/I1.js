var year = 2012;
if (year%4 !== 0){
    console.log("NOT LEAP YEAR");
} else if (year%100 !== 0){
    console.log("LEAP YEAR");
} else if (year%400 !== 0){
    console.log("NOT LEAP YEAR")
} else {
    console.log("LEAP YEAR")
}