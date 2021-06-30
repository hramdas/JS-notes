var arr = [34, -87, 23, 12, 98, -2, 0];
var len = arr.length;
// console.log(arr.length);

var oddSum = 0;
var evenSum = 0;
var evenCount = 0;
var oddCount = 0;
for (var i=0; i<len; i++)

if (arr[i]%2 == 0 ){
    if (arr[i] > 0) {
    evenSum += arr[i]
    evenCount++ }

} else if (arr[i]%2 !== 0 ){
    if (arr[i] > 0) {
    oddSum += arr[i]
    oddCount++ }
}

console.log("Odd Average - " + oddSum/oddCount);
console.log("Even Average - " + evenSum/evenCount);


