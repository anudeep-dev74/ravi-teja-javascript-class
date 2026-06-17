/*
     Create an arrow function that takes two strings, compares their lengths, and returns the longer string. 
     If both have the same length, return “Equal length.”

*/
let longerString = (str1, str2) => {
     if(str1.length > str2.length) {
          return str1;
     }else if(str2.length > str1.length) {
          return str2;
     }else {
          return "Equal length.";
     }
}
console.log(longerString("Hello", "World!"))
console.log(longerString("JavaScript", "JS"))
console.log(longerString("Test", "Code"))