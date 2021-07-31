var limit = 10;
out = []
for(var i = 2; i< 4; i++)
    for (var j =1; j<=limit;j++){
        res = i*j
        out.push(res)
        if (j==10 && i!==3){
            out.push("\n")
        }
    } 
    console.log(out.join(" "));


    out = []
    for (var i = 1; i<input.length; i++){
        num = input(i)
    } 
        for (var j = 1; j<=10; j++){
          res = num*j
           out.push(res) 
     } //out.push("\n")
    console.log(out.join(" "))





// function divisibleBy3 (number){
//     if (number%3 == 0) {
//     return true;
//     } else{
//         return false;
//     }
// }
