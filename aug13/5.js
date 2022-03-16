function Person(n, a){
    this.name =n;
    this.age = a;
}

function Teacher(s, n, a){
    Person.call(this, n, a);
    
     this.name =n;
     this.age = a;
    this.subject = s;
}

function Student(s, n, a){
    Person.apply(this, [n, a])
   this.subject=s;
}

function Player(s,n,a){
    var x = Person.bind(this,n,a)
    x()
    this.sport=s;
}

var teacher1 = new Teacher("Js", "Dada", 22)
var teacher2 = new Teacher("CSS", "Ram", 23)
console.log(teacher1)
console.log(teacher2)

var student1 = new Student("Js", "Ravi", 23)
console.log(student1)

player1 = new Player("Javelin", "Neeraj", "23")
console.log(player1)