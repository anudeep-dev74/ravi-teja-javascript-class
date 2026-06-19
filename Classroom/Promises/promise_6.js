function x(){
    console.log("Promise-1....");
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve("Promise-1 Success");
        }, 1500);
    });
}

function y(){
    console.log("Promise-2....");
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve("Promise-2 Success");
        }, 2000);
    });
}

function z(){
    console.log("Promise-3....");
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve("Promise-3 Success");
        }, 1000);
    });
}
x().then((res) => console.log(res)).catch((err) => console.log("Promise-1 Failure"));
y().then((res) => console.log(res)).catch((err) => console.log("Promise-2 Failure"));
z().then((res) => console.log(res)).catch((err) => console.log("Promise-3 Failure"));