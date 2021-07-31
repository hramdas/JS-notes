var nums = [1, 2, 3, 4, 5]
// nums.forEach(function(el, i, arr){
//     console.log(arr)
// })


//# map

//var res = nums.map(function(el){
 //   return el
// })
// console.log(res) //  [ 1, 2, 3, 4, 5 ] 

//map - always returns new array, not change old

// nums.map(function(el){  
//     console.log(el)
// })


//# filter
// var res = nums.filter(function(el, index){
//     return el%2==0
// })
// console.log(res)


// # reduce
// var sum = 0;
// var res = nums.reduce(function(ac, el){
//     console.log(ac)
//     return ac+el
    
// },0)
// console.log(res)


// #$############# PROBLEMS ################
// convert to hypen case
var arr = ["Masai", "School"]

var arr1 = arr.map(function(el, i){
    return el.toLowerCase()
})
console.log(arr1.join("_"))
