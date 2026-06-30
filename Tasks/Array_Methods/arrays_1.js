/*
    Map Method
    const arr = [1,2,3,4]
    const result = arr.map((num, idx, arr) => arr[idx] * 2);
    console.log(result);
*/

/*
const arr = [10, 20, 30];
const result = arr.map((num) => num.toString());
console.log(result);
*/

/*
const arr = ['a', 'b', 'c']
const result = arr.map(str => str.toUpperCase());
console.log(result);
*/

/*
const arr = [4, 5, 6];
const result = arr.map(num => num + 1).filter(num => num > 5);
console.log(result);
*/

/*
   const arr = [1, 2, 3];
   const result = arr.map((num) => {
     console.log(num);
   });
   console.log(result);
*/

/*
const arr = [4, 5, 6];
const result = arr.filter((num, index) => index % 2 === 0);
console.log(result);
*/

/*
const arr = ['apple', 'banana', 'cherry'];
const result = arr.filter(word => word.length > 5);
console.log(result);
*/


/*
 const arr = [];
    console.log(arr.map(num => num * 2));
    console.log(arr.filter(num => num > 2));
    arr.forEach(num => console.log(num));
*/

// const arr = [1, 2, 3, 4];
//     const result = arr
//       .map(num => ({ original: num, squared: num ** 2 }))
//       .filter(obj => obj.squared > 5);
//     console.log(result);

// const arr = [
//       { id: 1, value: 10 },
//       { id: 2, value: 20 },
//     ];
//     const result = arr.map(obj => ({ ...obj, value: obj.value * 2 }));
//     console.log(result);

// const arr = [[1, 2], [3, 4]];
//     const result = arr.map(subArr => subArr.map(num => num * 2));
//     console.log(result);

// const arr = [2, 3, 4];
//     const result = arr
//       .map(num => num ** 2)
//       .filter(num => num % 2 === 0)
//       .map(num => num / 2);
//     console.log(result);


// const arr = ['a', 'b', 'c'];
//     const result = arr.map((char, index) => index + char);
//     console.log(result);

//   const arr = [1, 2, 3];
//     const result = arr
//       .map(num => num * 2)
//       .filter(num => num > 2)
//       .forEach(num => console.log(num));
//     console.log(result);
// const arr = [1, 2, 3, 4];
//     const result = arr.map(num => num * 2).filter(num => num > 5);
//     console.log(result);
const arr = [1, 2, 3];
    arr.forEach((num, index) => {
      if (index === 1) return;
      console.log(num);
    });
