var arr = [2, 4, 5, 3, 6, 8];

var index = function(el, i){
    return i
}

// var even = function(el){
//     for(var i = 2; i < arr.length; i++)
//     count = 0
//     if(el/i == 0){
//         count++
//     }
//     if(count==0){
//         return el
//     }
// }

// out = arr.map(index).reduce(even)
// console.log(out)

el = arr

count = 0
for(var i = 2; i < el.length; i++){
    
    if(el/i == 0)
        count++
    
    if(count==0)
        console.log(el)
    