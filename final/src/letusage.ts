// block scope check

var messahe = "Hi";

{
    var message = "bye";
}

console.log(message); //prints bye

// function scope check

var someName = "John outside function";

function greet() {
    var someName = "Jane inside function";
    console.log(someName);
}

greet();
console.log(someName);