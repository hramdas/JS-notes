// Hypen Case

var arr = ["Apple", "Windows", "UBUNTU"];

var arr1 = arr.map(function(el, i){
    return el.toLowerCase()
})
console.log(arr1.join("-"))