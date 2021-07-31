var a = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
]

for (r=0; r<=1; r++){
    var subRow = []
    for (c=0; c<=1; c++){
        subRow.push(a[r][c]);
    } console.log(subRow.join(' '));
} 