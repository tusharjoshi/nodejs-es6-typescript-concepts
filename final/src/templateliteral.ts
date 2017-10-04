let salute = "Hello";
let greeting = salute + ", World";

console.log(greeting);

let greeting2 = `${salute}, World`;

console.log(greeting2);

let greeting3 = `${salute}, 

        World
        
`;

console.log(greeting3);

function tag([strings]: TemplateStringsArray, ...values: any[]) {
    console.log(strings.toString());
    if( values[0] < 10 ) {
        values[1] = "sleepy";
    }
    return `${strings[0]} ${values[0]} ${strings[1]} ${values[1]}`;
}

let mymessage = tag`Its ${new Date().getHours()} Im ${""}`;
console.log(mymessage);