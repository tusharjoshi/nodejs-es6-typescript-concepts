declare function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>;
declare class MyClass {
    myMethod(arg: string): string;
}
declare let obj: MyClass;
declare let value: string;
declare class SomeClass {
    readonly prop: boolean;
}
declare function enumerable(isEnumerable: boolean): (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;
declare let someObj: SomeClass;
declare let val: boolean;
