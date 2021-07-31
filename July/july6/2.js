var items = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
]

var row = items.length;
var cols = items[0].length;
// console.log(row, cols)

for (var i=0; i< cols; i++){ 
    var col_sum = 0;
   for (j=0; j<row; j++){
       col_sum = col_sum + items[j][i]; // row (col)
   } 
   console.log(col_sum)
 
}




// var sum1 = 0;
// for (var i=0; i< rows; i++)

