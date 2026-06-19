function logA(){
    console.log("A");
}
function logB(){
    setTimeout(() => {
        console.log("B");
    }, 2000);
}
function logC() {
    Promise.resolve().then(() => {
        console.log("C");
    });
}
function logD() {
    console.log("D");
}

logA();
logB();
logC();
logD();