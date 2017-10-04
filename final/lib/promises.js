"use strict";
var d = new Promise(function (resolve, reject) {
    if (2 == 2) {
        resolve("Hello");
    }
    else {
        reject("No way");
    }
});
d.then(function (data) {
    console.log('success: ', data);
});
d.catch(function (error) {
    console.log('error: ', error);
});
var d2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (2 == 2) {
            resolve("Hello");
        }
        else {
            reject("No way");
        }
    }, 2000);
});
d2.then(function (data) {
    console.log('success: ', data);
});
d2.catch(function (error) {
    console.log('error: ', error);
});
