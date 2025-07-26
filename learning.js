// examples of callback functions
function learnJavaScript(callback) {
    console.log("Learning JavaScript...");
    // Simulate some learning process
    setTimeout(() => {
        console.log("Finished learning JavaScript!");
        callback();
    }, 2000);
}

function learnPython(callback) {
    console.log("Learning Python...");
    // Simulate some learning process
    setTimeout(() => {
        console.log("Finished learning Python!");
        callback();
    }, 2000);
}
// what would be the output of the following code?
learnJavaScript(() => {
    learnPython(() => {
        console.log("All learning completed!");
    });
});     
// Output:
// Learning JavaScript...
// Finished learning JavaScript!
// Learning Python...
// Finished learning Python!
// All learning completed!
// This code demonstrates the use of callback functions to handle asynchronous operations in JavaScript.