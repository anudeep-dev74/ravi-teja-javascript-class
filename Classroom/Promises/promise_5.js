function sum() {
    return new Promise((resolve, reject) => {
        resolve()
    });
}
console.log(sum().then(() => console.log("Promise Resolved")).catch(() => console.log("Promise Rejected")));