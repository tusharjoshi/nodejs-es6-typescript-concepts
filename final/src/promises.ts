let d = new Promise<string>((resolve, reject) => {
    if( 2 == 2 ) {
        resolve("Hello");
    } else {
        reject("No way");
    }
});

d.then((data) => {
    console.log('success: ', data);
});

d.catch((error) => {
    console.log('error: ' , error);
});

let d2 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
    if( 2 == 2 ) {
        resolve("Hello");
    } else {
        reject("No way");
    }}, 2000);
});

d2.then((data) => {
    console.log('success: ', data);
});

d2.catch((error) => {
    console.log('error: ' , error);
});