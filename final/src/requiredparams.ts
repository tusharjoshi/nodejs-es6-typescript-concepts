function myProcess({name = "John", age = 29, salary = 20000}) {
    console.log(name);
    console.log(age);
    console.log(salary);
}

myProcess({name: "Jonny"});

function requiredParameter(param: string): any {
    throw new Error(`Missing parameter "${param}"`)
}

function myProcess2({name = "John", age = requiredParameter("age"), salary = 20000}) {
    console.log(name);
    console.log(age);
    console.log(salary);
}

myProcess2({name: "Jonny", age: 30});