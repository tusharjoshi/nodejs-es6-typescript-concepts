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
console.log("Loop index without closure");
var index = 0;
for (index = 0; index < 5; index++) {
    setTimeout(function () {
        console.log(index);
    }, 2000);
}
console.log("Loop index with closure");
for (index = 0; index < 5; index++) {
    (function (local_index) {
        setTimeout(function () {
            console.log(local_index);
        }, 2000);
    })(index);
}
