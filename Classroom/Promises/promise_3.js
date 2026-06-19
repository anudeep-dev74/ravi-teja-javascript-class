/*
    function getData() {
        return new Promise((resolve, reject) => {
            resolve()
        });
    }
    console.log(getData());
    getData().then((res) => console.log("Success")).catch((err) => console.log("Failure"));
*/

// short hand for promise 
Promise.reject().then((res) => console.log("Success")).catch((err) => console.log("Failure"));
Promise.resolve().then((res) => console.log("Success")).catch((err) => console.log("Failure"));