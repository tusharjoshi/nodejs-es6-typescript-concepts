"use strict";
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
