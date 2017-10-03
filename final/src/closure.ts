let counter = (function(){
    let counter: number = 0;

    return {
        getCount: () => {
            return counter;
        },
        increment: () => {
            counter++;
        },
        decrement: () => {
            counter--;
        }
    };
})();

console.log("Initial Count: "+ counter.getCount());
counter.increment();
counter.increment();
console.log("After increments: " + counter.getCount());

// counter.counter = 23; // not available 
