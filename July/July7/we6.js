// var obj = {
//     length: 12,
//     breadth: 8,
//     area: function(){
//         out = this.length * this.breadth
//     console.log(out)},
//     perimeter: function(){
//         out = 2*(this.length + this.breadth)
//         console.log(out)
//     }
    

// }
// obj.area();
// obj.perimeter()


var details = {
    name : "Ramdas"
}

var details = {
    name : "Rani",
    age : 5
}

console.log(Object.values(details))

for(i in details){
    console.log(i, details[i])
}
// for(key in details){
//     console.log(key)
// }