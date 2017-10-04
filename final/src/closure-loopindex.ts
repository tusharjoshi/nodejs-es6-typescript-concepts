
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
