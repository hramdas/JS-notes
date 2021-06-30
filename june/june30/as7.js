var input = ["HTML", "CSS", "JAVA", "JS", "ANDROID"];
var len = input.length;
var sum = 0;
// console.log(len);

for (i=0; i<len; i++)
sum += input[i].length;

console.log(sum);