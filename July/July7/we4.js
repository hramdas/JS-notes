var object = {
    name: "Ironman",
    year_of_birth: 1974,
    Age: function() {
        age = 2021 - this.year_of_birth;
        console.log(age)
    }  
}
// object.year_of_birth = 1998;
object.Age() ;

