var num = 58495;
var num = num.toString();
var number = num.split("").map(Number);
// var number = Number(number);
length = number.length-1;

out = []
for (i=length; i>=0; i--){
    out.push(number[i])
}

for (j=0; j<out.length; j++)
console.log(out[j]*(10**j))
