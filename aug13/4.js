// var person1 = {
//     name: "Jonny Kumar",

//     createAadharId(){
//         this.id = Math.round(Math.random()*1000000000000);
//     },
// };

// person1.createAadharId()
// console.log(person1)
// var person2  = { name: "Happy Singh"};

// person2.createAadharId()
// console.log(person2)

var person1 = {
    name: "Jonny Kumar"
}
var person2 = {
    name: "R Kumar"
}

 function createAadharId(){
     this.id = Math.round(Math.random()*1000000000000);
 }

//  createAadharId.call(person1);
//  createAadharId.call(person2);
//  console.log(person1)
//  console.log(person2)

 x = createAadharId.bind(person1);   //bind 
//  console.log(x)  
 x();   //function
 console.log(person1)
