"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function fileCallBack(err, data) {
    if (err)
        return console.error(err);
    console.log(data.toString());
}
fs_1.readFile("src/index.ts", fileCallBack);
console.log("This message will print first.");
