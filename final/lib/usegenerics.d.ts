declare class Queue<T> {
    private data;
    push: (item: T) => number;
    pop: () => T;
}
declare const q1: Queue<string>;
