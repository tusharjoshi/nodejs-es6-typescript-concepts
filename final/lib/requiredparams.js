"use strict";
function myProcess(_a) {
    var _b = _a.name, name = _b === void 0 ? "John" : _b, _c = _a.age, age = _c === void 0 ? 29 : _c, _d = _a.salary, salary = _d === void 0 ? 20000 : _d;
    console.log(name);
    console.log(age);
    console.log(salary);
}
myProcess({ name: "Jonny" });
function requiredParameter(param) {
    throw new Error("Missing parameter \"" + param + "\"");
}
function myProcess2(_a) {
    var _b = _a.name, name = _b === void 0 ? "John" : _b, _c = _a.age, age = _c === void 0 ? requiredParameter("age") : _c, _d = _a.salary, salary = _d === void 0 ? 20000 : _d;
    console.log(name);
    console.log(age);
    console.log(salary);
}
myProcess2({ name: "Jonny", age: 30 });
