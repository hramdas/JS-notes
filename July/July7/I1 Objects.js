var user = {
    name: "Ramdas",
    age: 23,
    gender: "M",
    hobbies: ["reading", "coding"],
    swimming: false,
    address: {
        city: "Bangalore",
        pincode: "431741"
    }
}

for(k in user){
    // console.log(user);
    //console.log(k);   // Keys
    //console.log(user[k]) //Values   
}

user.address.city += "Mumbai"

console.log(user.address.city)  //obj in obj
//console.log(user.address.pincode);

// var ok = object.keys(user);
// for (var i = 0; i< ok.length; i++){
//     console.log(ok[i]+ ' _ ' + ok('i'))
// }