var items = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
]

var sum = 0;

for (var r = 0; r<items.length; r++){
    for (var c=0; c<items[r].length; c++){
        sum = sum + items[r][c]
    }
}
console.log(sum)