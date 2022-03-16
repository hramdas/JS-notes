var names = ["Nrupul", "Ramdas", "Yogesh", "Rohan"];
var numbers = [1, 2, 3, 4, 5, 6];

//for (var i = 0; i < names.length; i++) {  // insted of loop use forEach
    //var name = names[i];}

names.forEach(function(el){
    console.log(el)
})

numbers.forEach(function(el){
    console.log(el+2)
})

// names.forEach(function(el, i){  //single i not work
//     console.log(i)  // Print index 
// })



//----------------------------

var hello = function(n){ 
    console.log("welcome " + n)
}
names.forEach(hello)  //run function hello for each item in names

// function doSomething(a, b){
//     console.log(a,b)
// } doSomething(hello, )

