/*
    Write a function performTasks that accepts a number and two callback functions. 
    First, add 5 to the number using the first callback, and then multiply the result by 2 using the second callback. 
    Log the final result to the console.

*/
function performTasks(num, addCallback, mulCallback) {
    let addedResult = addCallback(num);
    let mulResult = mulCallback(addedResult);
    console.log("Multiplied Result: ", mulResult)
}
performTasks(10, function(num){
    return num + 10;
}, function(num){
    return num * 2;
});