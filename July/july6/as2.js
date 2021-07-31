a = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9],
    [1, 2, 3]
]

var len = a.length;
//console.log(len)
//00 01 02 | 10 11 12
//00 01 | 10 11 | 20 21

// for (var r=0; r<len; r++){
//     out = []
//     for (var c=0; c<len; c++){
//         out.push(a[c][r])
//     }
//         out = out.join(' ')
//         console.log(out)
// } 


for (var c=0; c<3; c++){
   out1 = []
    for (var r=0; r<len; r++){
        out1.push(a[r][c])
        }
        console.log(out1.join(" "))
    }  //output = output.join("\n")
      
    