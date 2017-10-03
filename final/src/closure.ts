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

console.log("Loop index without closure");
let index: number = 0;
for( index = 0; index < 5; index++ ) {
    setTimeout(() => {
        console.log(index);
    }, 2000);
}

console.log("Loop index with closure");
for( index = 0; index < 5; index++ ) {
    (function(local_index){
        setTimeout(() => {
            console.log(local_index);
        }, 2000);
    })(index);
}
