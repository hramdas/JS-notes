var arr = ["A", "Quick", "Brown", "Fox", "Jumps", "Over", "A", "Lazy", "Dog"];
var len = arr.length;

var output = []

for (i=0; i<len; i++)

if (arr[i].length >= 4) {
    // console.log(arr[i])
    output.push(arr[i])
}
console.log(output)