"use strict";
var counter = (function () {
    var counter = 0;
    return {
        getCount: function () {
            return counter;
        },
        increment: function () {
            counter++;
        },
        decrement: function () {
            counter--;
        }
    };
})();
console.log("Initial Count: " + counter.getCount());
counter.increment();
counter.increment();
console.log("After increments: " + counter.getCount());
// counter.counter = 23; // not available 
