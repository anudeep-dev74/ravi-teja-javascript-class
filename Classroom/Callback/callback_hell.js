function sum(val, callback){
    console.log("Sum Successful");
    setTimeout(() => {
        callback(val + 10);
    }, 2000);
}

function subtract(val, callback){
    console.log("Subtract Successful");
    setTimeout(() => {
        callback(val - 5);
    }, 2000);
}

function multiply(val, callback){
    console.log("Multiply Successful"); 
    setTimeout(() => {
        callback(val * 2);
    }, 2000);
}

function divide(val, callback){
    console.log("Divide Successful");
    setTimeout(() => {
        callback(val / 2);
    }, 2000);
}

sum(5, (result) => {
    console.log("Sum Result: " + result);
    subtract(result, (result) => {
        console.log("Subtract Result: " + result);
        multiply(result, (result) => {
            console.log("Multiply Result: " + result);
            divide(result, (result) => {
                console.log("Divide Result: " + result);
            });
        });
    });
});