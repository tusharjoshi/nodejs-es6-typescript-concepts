var { mycolor, ...remaining } = {
    "mycolor": "blue",
    "position": "Next",
    "myname": "John"
}

console.log( mycolor );

let [x,,y] = [1, 2, 3,4];
console.log("x:"+x + " y:" + y);

let [x1,y1,...remaining1] = [1, 2, 3,4];
console.log("x:"+x + " y:" + y, remaining1);

function showPerson(name: string, age: number) {
    console.log(name, age);
}

(<any>showPerson)(...["John", 34]);

