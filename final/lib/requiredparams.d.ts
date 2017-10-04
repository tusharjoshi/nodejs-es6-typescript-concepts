declare function myProcess({name, age, salary}: {
    name?: string;
    age?: number;
    salary?: number;
}): void;
declare function requiredParameter(param: string): any;
declare function myProcess2({name, age, salary}: {
    name?: string;
    age?: any;
    salary?: number;
}): void;
