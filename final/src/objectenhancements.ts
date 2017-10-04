let color = "red";
let speed = 10;
function go() {
    console.log("Vroom");
}

let car = {color, speed, go};

console.log(car);
car.go();

let modifiedCar = {
    color,
    speed,
    go() {
        console.log("Furious Vroom");
    }
};

console.log(modifiedCar);
modifiedCar.go();

let computedCar = {
    color,
    speed,
    ["go"]: function() {
        console.log("Computed Vroom");
    }
};

console.log(computedCar);
computedCar.go();

let drive = "go";
let computedCar2 = {
    color,
    speed,
    [drive]: function() {
        console.log("Computed Vroom");
    }
};

console.log(computedCar2);
// computedCar2.go();