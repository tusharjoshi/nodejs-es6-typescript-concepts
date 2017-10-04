declare function greetName(message: string, name?: string): void;
declare function receive(complete?: () => void): void;
declare let myReceive: (complete?: () => void) => void;
