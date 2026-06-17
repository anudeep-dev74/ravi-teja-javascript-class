/*
    Write a function checkEven that accepts a number and two callback functions. 
    If the number is even, call the first callback with the number. If the number is odd, 
    call the second callback with the number.
*/
function checkEven(num, evenCallback, oddCallback) {
    if(num % 2 === 0) {
        evenCallback(num);
    }else {
        oddCallback(num);
    }
}
checkEven(11, function(num) {
    console.log(num + " is even.");
}, function(num) {
    console.log(num + " is odd.")
});