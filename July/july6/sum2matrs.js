matrix1 = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
]

matrix2 = [
    [2, 1, 2],
    [1, 2, 1],
    [2, 1, 2]
]

var length = matrix1.length
// console.log(length)

var sum2 = []
for (r = 0; r<length; r++){
    sum = []
    for(c = 0; c<length; c++){
        s = matrix1[r][c] + matrix2[r][c]
        sum.push(s)
    } 
        sum2.push(sum)
        
} sum2 = sum2.join("\n")
    console.log(sum2)