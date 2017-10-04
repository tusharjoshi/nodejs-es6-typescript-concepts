"use strict";
console.log([1, 2, 3]);
console.log.apply(console, [1, 2, 3]);
var first = [1, 2, 3];
var second = [4, 5, 6];
first.push.apply(first, second);
console.log(first);
function addThreeThings(a, b, c) {
    var result = a + b + c;
    console.log(result);
}
// addThreeThings(...first);
addThreeThings.apply(void 0, first);
