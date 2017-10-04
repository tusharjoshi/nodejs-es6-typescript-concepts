declare function logParam(target: any, propertyKey: string | symbol, parameterIndex: number): void;
declare class LogClass {
    myMethod(myParameter: string): void;
}
declare let logClass: LogClass;
