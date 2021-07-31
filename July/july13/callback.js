function test() {
    console.log("Ram");
}

var foo = function(name) {
    console.log("Foo ");
}

// test();
// foo();

function doSomething(name, a, b) {
    console.log("Testing");
    console.log(name);
    a();
    b("Masai");
}
doSomething("Ram", test, foo);

