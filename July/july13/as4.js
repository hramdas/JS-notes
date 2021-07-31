var arr = ["apple", "windows", "ubuntu"];
var arr1 = arr.map(function(el){
    return el.toLowerCase()
})
console.log(arr1.join("_"))