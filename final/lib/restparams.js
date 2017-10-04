"use strict";
function myFunc() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log(items.length);
}
myFunc("Hi");
myFunc("Hi", "There");
