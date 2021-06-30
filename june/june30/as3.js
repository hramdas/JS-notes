var limit = 100;
// var prime = []

for(var start = 2; start<=limit; start++){
    var number = start;
    var count = 0;

    for(var i = 1; i<=number; i++){
        if (number % i == 0){
           count++
    }
    }
    if (count == 2){
        console.log(number);
    }
}