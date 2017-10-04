"use strict";
var salute = "Hello";
var greeting = salute + ", World";
console.log(greeting);
var greeting2 = salute + ", World";
console.log(greeting2);
var greeting3 = salute + ", \n\n        World\n        \n";
console.log(greeting3);
function tag(_a) {
    var strings = _a[0];
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    console.log(strings.toString());
    if (values[0] < 10) {
        values[1] = "sleepy";
    }
    return strings[0] + " " + values[0] + " " + strings[1] + " " + values[1];
}
var mymessage = (_a = ["Its ", " Im ", ""], _a.raw = ["Its ", " Im ", ""], tag(_a, new Date().getHours(), ""));
console.log(mymessage);
var _a;
