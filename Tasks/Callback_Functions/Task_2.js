/*
     Write a function called forEachElement that takes an array and a callback function. 
     The function should iterate over the array and execute the callback function for each element, 
     passing the element as an argument.
*/
function forEachElement(arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i])
    }
}
forEachElement(["Narendra", "Anudeep", "Mahendra", "Sandeep"], function(name) {
    console.log("Name is : " + name);
})