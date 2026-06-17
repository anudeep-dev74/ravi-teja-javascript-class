/*
  Write a function sayHello that accepts a name and a callback function. 
  Use setTimeout to wait for 1 second and then call the callback function, passing the message "Hello, [name]!" 
  (replace [name] with the provided name).
*/
function sayHello(name, callback) {
    setTimeout(function(){
        callback("Hello, " + name + "!");
    }, 1000);
}
sayHello("Anudeep", function(name) {
    console.log(name);
})