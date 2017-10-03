//var name: string  = "Tushar Joshi";

(function process() {
    var name = "Jane Doe";
    console.log(name);

    var name = "john Doe";

    console.log(name);
})();

//console.log(name);

(function(){
    const PI = 3.14;

    for( let i = 0 ; i < 5 ; i++ ) {
        console.log(i);
        const E = 2.13;
    }
    //console.log(E); // E not available here
    //console.log(i);  // i not available here

    for( var j = 0 ; j < 5 ; j++) {
        console.log(j);
    }
    console.log(j); // j available here
})();