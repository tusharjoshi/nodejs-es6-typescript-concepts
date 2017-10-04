import { readFile } from 'fs';

function fileCallBack(err: NodeJS.ErrnoException, data: Buffer): void {
    if( err ) return console.error(err);
    console.log(data.toString());
}

readFile("src/index.ts", fileCallBack);

console.log("This message will print first.");