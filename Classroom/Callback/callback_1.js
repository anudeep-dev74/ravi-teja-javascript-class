function order(callback) {
    console.log("Order placed");
    callback("Shipping Successful");   
}

function dispatch(callback) {
    console.log("Dispatching order");
    callback("Order Dispatched");   
}

order((res) => {
    console.log(res);
    dispatch((res) => {
        console.log(res);
    });
});