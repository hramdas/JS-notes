// In a method (function written inside an object), this refers to the owner object.

var person = {
  name: "john",
  myName: function () {
    console.log(this.name); // this refers to person object
  },
};

person.myName();
1;
