matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

function sum(matrix) {
    var s = 0;
    for (var r =0; r < matrix.length; r++){
        for (var c =0; c < matrix[r].length; c++) {
            s = s + matrix[r][c];
        }

    }
    return s;
}

console.log(sum(matrix));
