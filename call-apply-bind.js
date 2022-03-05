let college = {
  name: "Shahu College",
  location: "Latur",
};

function studentDetails(student, grade) {
  console.log(
    student + " from class " + grade + " is student of " + this.name,
    this.location
  );
}

// Call: The call() method invokes a function with a given this value and arguments provided one by one
studentDetails.call(college, "Ramdas", "12th");

//Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
studentDetails.apply(college, ["Ramdas", "12th"]);

//bind: returns a new function, allowing you to pass any number of arguments
let studentbio = studentDetails.bind(college);
studentbio("Ramdas", "12th");
