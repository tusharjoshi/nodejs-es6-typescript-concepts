console.log([1,2,3]);

console.log(...[1,2,3]);

let first: number[] = [1, 2, 3];
let second: number[] = [4, 5, 6];

first.push(...second);

console.log(first);

function addThreeThings(a: number, b: number, c: number) {
    let result = a + b + c;
    console.log(result);
}

// addThreeThings(...first);
(<any>addThreeThings)(...first);