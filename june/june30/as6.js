
var str = "hannah";
var count = 0;
length = str.length-1;
halfL = Math.ceil(length/2)

for (var i=0; i<halfL; i++){
if (str[i] == str[length - i]){
    count++
}
}
// console.log(count)

if (count == halfL){
    console.log("YES");
} else {
    console.log("NO")
}