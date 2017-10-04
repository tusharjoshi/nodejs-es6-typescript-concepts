declare function serialize(name?: string): (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => void;
declare class Person {
    constructor(name: string);
    private _name;
    readonly name: string;
    readonly lang: string;
}
declare let p: Person;
