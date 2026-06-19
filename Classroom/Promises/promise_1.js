/*
    let promise = new Promise((resolve, reject) => {
        resolve()
    });
    console.log(promise);
    Output: Promise Object is returned.
*/

let promise = new Promise((resolve, reject) => {
    //resolve("Promise Resolved");
    reject("Promise Rejected");
});

promise.then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
});

/*
    Output: Promise Resolved
    Explanation: The promise is resolved with the value "Promise Resolved" and the 
    .then() method is called to handle the resolved value. If there was an error, 
    the .catch() method would handle it.
*/