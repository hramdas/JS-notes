var names = ['Nrupul', "Aman", "Albert", "Santhi"];
var ages = [32, 38, 30, 27];
var gender = ['m', 'm', 'm', 'f'];

var users = [];

for (var i = 0; i<names.length; i++) {
    var user = {};
    user.name = names[i];
    user.age = ages[i];
    user.gender = gender[i];
    users.push(user);
} 
console.log(users);

for (var i = 0; i<users.length; i++) {
    var usr = users[i];
    if(usr.gender == 'm') {
        console.log(usr.name);
    }
}