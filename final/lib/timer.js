"use strict";
function printHelloWorld() {
    console.log("Hello World!");
}
var timer = setInterval(printHelloWorld, 2000);
setTimeout(function () {
    clearTimeout(timer);
}, 10000);
