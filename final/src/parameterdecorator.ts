function logParam(target: any, propertyKey: string | symbol, parameterIndex: number) {
	console.log(target);         // MyClass prototype
	console.log(propertyKey);    // "myMethod"
	console.log(parameterIndex); // 0
}

class LogClass {
    myMethod(@logParam myParameter: string) {
        
    }
}

let logClass = new LogClass();
logClass.myMethod("Hi");
