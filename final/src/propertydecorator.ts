function serialize(name?: string) {
    return function (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
        console.log("propertyKey:", propertyKey);
        console.log("name:", name);
        console.log(descriptor);
    }
}

class Person {
    
    constructor(name: string) {
        this._name = name;
    }

    private _name: string;

    @serialize()
    get name() {
        return this._name;
    }

    @serialize('Language')
    get lang() {
        return 'JavaScript';
    }
}

let p = new Person("John");
console.log(p.name);
console.log(p.lang);