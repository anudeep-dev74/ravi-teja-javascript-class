/**
 * Write a function called processNumber that accepts a number and a callback function. 
 * The processNumber function should double the number and pass the result to the callback function. 
 */

function processNumber(num, callback) {
    let result = num * 2;
    callback(result);   
}
processNumber(10, function(result) {
    console.log("The processed number is: " + result);
})
