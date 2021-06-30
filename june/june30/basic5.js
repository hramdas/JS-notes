var num = 64;
var count = 0;
var i = 1;
while (i <= num){
        if (num % i == 0){
        count++;
        }
        i++
}

if (count == 2){
 console.log("prime")
} else {
        console.log("Not")
}

