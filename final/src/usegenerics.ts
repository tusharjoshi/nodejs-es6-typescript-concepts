class Queue<T> {
    private data: T[] = [];

    push = (item: T) => this.data.push(item);

    pop = (): T => (<any>this.data).shift();
}

const q1 = new Queue<string>();
q1.push("One");
console.log(q1.pop());