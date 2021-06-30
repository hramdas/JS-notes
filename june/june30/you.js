var num = 5;
var i=1;
var count = 0
while (i<=num){
    if (num%i == 0){
    count++;
}
    i++
}
if (count == 2){
    console.log("Prime Number");
} else {
    console.log("Not");
}

var limit = 10;
var sum = 0;
for (var i=0; i<=limit; i++){
    if (i%3 == 0){
        sum = sum + i
    }
}
console.log(sum);


var limit2 = 5;
var oddSum = 0;
var evenSum = 0;
for (var i = 0; i<=limit2; i++){
    if (i % 2 == 0){
        evenSum = evenSum + i
    } 
    if (i % 2 !== 0){
        oddSum = oddSum + i
        }
    } 
    console.log(oddSum);
    console.log(evenSum);

    
var score = [22, 25, 20, 32, 44, 56, 30]
var lowest = score[0];
var highest = score[0];
for (var i = 1; i < score.length; i++) {
    if (score[i] < lowest){
        lowest = score[i];
    }if (score[i] > highest){
        highest = score[i];
    }
} 
console.log(lowest);
console.log(highest);


var num = 23;
var count = 0;
for (var i = 1; i<=num; i++){
    if (num % i == 0){
        count++
    }
}
if (count == 2){
    console.log("Prime")
} else {
    console.log("Not")
}


var arr = ["masai school", "rohan", "aman", "ramdas"];
var vowels = 0;
var consonants = 0;
for (var i = 0; i < arr.length; i++){
    var array = arr[i];
    for (var j = 0; j < array.length; j++ ){
        if (array[j] !== 'a' && array[j] !== 'e' && array[j] !== 'i' && array[j] !== 'o' && array[j] !== 'u'){
            consonants++
        } if (array[j] == 'a' || array[j] == 'e' || array[j] == 'i' || array[j] == 'o' || array[j] == 'u'){
            vowels++
        }
    } 
}
console.log(vowels)
console.log(consonants)