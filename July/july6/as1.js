a = [
    [1, 2, 3, 4],
    [5, 6, 5, 6],
    [7, 8, 9, 9],
    [2, 4, 1, 3]
]
var len = a.length;

var sum1 = 0;
var sum2 = 0;
for (r=0; r<len; r++){
    for (c=0; c<len; c++){
        if(r == c){
        sum1 += (a[r][c])}
        else if(r+c == len-1) {  // 03 12 21 20 
            sum2 += (a[r][c])}
    }
}
    console.log(sum1-sum2)
