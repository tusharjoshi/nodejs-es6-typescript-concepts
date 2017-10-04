function printHelloWorld() {
    console.log("Hello World!");
}

let timer: NodeJS.Timer = setInterval(printHelloWorld, 2000);

setTimeout(function() {
    clearTimeout(timer);
}, 10000);