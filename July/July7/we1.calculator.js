var calc = {
    a : 5,
    b : 4,
    addition : function() {
     console.log(this.a + this.b)},

    substraction : function() {
         console.log(this.a - this.b)},

    division : function() {
        console.log(this.a/this.b)},
    multiplication : function() {
        console.log(this.a*this.b)
    }
    
} 
calc.addition();
calc.substraction();
calc.division();
calc.multiplication();