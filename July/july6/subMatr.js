var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [12, 14, 15, 16]
]

var rs = 0;
var cs = 0;
var re = 2;
var ce = 2;

var sub = [];
for (var r=rs; r<=re; r++){
    // console.log(matrix[r]);
    var sub_row= [];
    for(var c = cs; c<=ce; c++) {
        // console.log(matrix[c])
        sub_row.push(matrix[r][c]);
        // console.log(sub_row)
    }
    sub.push(sub_row);
    console.log(sub_row.join(' '));
}
// console.log(sub)