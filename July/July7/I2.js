// Unique Values

var items = [ 'a', 'c', 'a', 'b', 'z', 'q', 'c'];

// var unique = [];
// for (var i =0; i<items.length; i++){
//     var exists = false;
//     for (var j = 0; j < unique.length;j++) {
//         if(items[i] == unique[j]){
//             exists = true;
//             break;
//         }
//     }
//     if (!exists) {
//         unique.push(items[i]);
//     }
// }
// console.log(unique);

//OR  |||
//    vvv

var items_obj = {}

for (var i=0; i<items.length; i++){
    var char = items[i];
    items_obj[char] = true;  //true or anything ex : Ram, abc
}
console.log(Object.keys(items_obj));




// var my = {
//     name: "Ram"
// }
// my.age = 23

// console.log(my)
