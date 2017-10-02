// Slow task which finishes after 3 seconds
function slowTask(callback: (message: string) => void) {
	// Delay of 3 seconds
	setTimeout(function() {
		callback("Slow task has been completed.");
	}, 3000);
}
 
// Callback function
function doThisWhenFinished(message: string) {
	console.log(message);
}
 
// Calling our simulated I/O function
slowTask(doThisWhenFinished);
 
console.log("Prints before the slow tasks finishes");