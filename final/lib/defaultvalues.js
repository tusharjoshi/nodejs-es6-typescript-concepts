"use strict";
function greet(message) {
    if (message === void 0) { message = "Hello"; }
    console.log(message);
}
greet();
greet("Hi There");
function greetName(message, name) {
    if (name === void 0) { name = "John"; }
    console.log(message + ' ' + name);
}
greetName("Hi");
greetName("Hi", "Johny");
// default function 
function receive(complete) {
    if (complete === void 0) { complete = function () { console.log("Default Complete"); }; }
    complete();
}
receive();
receive(function () {
    console.log("complete");
});
var myReceive = function (complete) {
    if (complete === void 0) { complete = function () { console.log("MyReceive Default Complete"); }; }
    return complete();
};
myReceive();
