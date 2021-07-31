var a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


//Lower Tringal Matrix Sum
var sum = 0
for (var i = 0; i<a.length; i++){
    for (var j =0; j<= i; j++)
    var sum= sum+ a[i][j]
}
console.log(sum)


//  Upper Tringal Matrix Sum
// 00 01 02 11 12 22
var sum1 = 0
for (var i = 0; i<a.length; i++){
    for (var j =0; j<= i; j++)
    var sum1= sum1+ a[j][i]
}
console.log(sum1)



//Upper Tringal Matrix

// for (var i = 0; i<a.length; i++){
//     for (var j =i; j< a.length; j++)
//     console.log(a[i][j])
// }
