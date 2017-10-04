"use strict";
var color = "red";
var speed = 10;
function go() {
    console.log("Vroom");
}
var car = { color: color, speed: speed, go: go };
console.log(car);
car.go();
var modifiedCar = {
    color: color,
    speed: speed,
    go: function () {
        console.log("Furious Vroom");
    }
};
console.log(modifiedCar);
modifiedCar.go();
var computedCar = (_a = {
        color: color,
        speed: speed
    },
    _a["go"] = function () {
        console.log("Computed Vroom");
    },
    _a);
console.log(computedCar);
computedCar.go();
var drive = "go";
var computedCar2 = (_b = {
        color: color,
        speed: speed
    },
    _b[drive] = function () {
        console.log("Computed Vroom");
    },
    _b);
console.log(computedCar2);
var _a, _b;
// computedCar2.go(); 
