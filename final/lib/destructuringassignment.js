"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _a = {
    "mycolor": "blue",
    "position": "Next",
    "myname": "John"
}, mycolor = _a.mycolor, remaining = __rest(_a, ["mycolor"]);
console.log(mycolor);
var _b = [1, 2, 3, 4], x = _b[0], y = _b[2];
console.log("x:" + x + " y:" + y);
var _c = [1, 2, 3, 4], x1 = _c[0], y1 = _c[1], remaining1 = _c.slice(2);
console.log("x:" + x + " y:" + y, remaining1);
function showPerson(name, age) {
    console.log(name, age);
}
showPerson.apply(void 0, ["John", 34]);
