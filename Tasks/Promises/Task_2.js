console.log("Start");
setTimeout(() => {
    console.log("Timeout");
}, 2000);
Promise.resolve().then(value => {
    console.log("Promise");
});
console.log("End");
