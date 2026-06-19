/*
    let promise1 = new Promise((resolve, reject) => {
        Asynchronous operation 
        reject()
    });
    promise1.then((res) => console.log(res)).catch((err) => console.log("Failure"));
*/

let promise1 = new Promise((resolve, reject) => {
    resolve()
    reject()
});
promise1.then((res) => console.log("Success")).catch((err) => console.log("Failure"));