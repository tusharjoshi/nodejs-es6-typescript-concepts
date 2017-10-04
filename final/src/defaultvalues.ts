function greet(message: string = "Hello") {
    console.log(message);
}

greet();

greet("Hi There");

function greetName(message: string, name: string = "John") {
    console.log(message + ' ' + name);
}

greetName("Hi");

greetName("Hi", "Johny");

// default function 

function receive(complete: () => void = () => { console.log("Default Complete"); }) {
    complete();
}

receive();

receive(function() {
    console.log("complete");
});

let myReceive = (complete: () => void = () => { console.log("MyReceive Default Complete"); }) => complete();

myReceive();