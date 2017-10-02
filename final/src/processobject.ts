process.on('exit', function(code) {
    
    // Following code will never execute.
    setTimeout(function() {
        console.log("This will not run");
    }, 0);
    
    console.log('About to exit with code:', code);
});

// Printing to console
process.stdout.write("Hello World!" + "\n");

// Reading passed parameter
process.argv.forEach(function(val, index, array) {
   console.log('index: ' + index + ' value: ' + val);
});

// Getting executable path
console.log('Executable Path: ' + process.execPath);

// Platform Information 
console.log('Platform: ' + process.platform);

// Print the current directory
console.log('Current directory: ' + process.cwd());

// Print the process version
console.log('Current version: ' + process.version);

// Print the memory usage
console.log(process.memoryUsage());

console.log("Program Ended");
