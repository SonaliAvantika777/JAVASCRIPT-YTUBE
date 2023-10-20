// Array

const myarr = [1,2,3,4,5,6]
const arr1 = ["sonali","rachi"]
const arr2 = new Array(1,"sonali",87,'s',true)

// console.log(arr2[0]);
// console.log(arr2[1]);

// Array methods

// arr2.push(3)      //Appends new elements to the end of an array,
// arr2.pop()        // Removes the last element from an array and returns it
// arr2.unshift(7)   // Inserts new elements at the start of an array
// arr2.shift(7)     // removes the first element from an array and returns it

//console.log(arr2);

// console.log(arr2.includes(4));          // f
// console.log(arr2.indexOf("sonali"));    //1
// console.log(arr2.indexOf("ram"));       // -1

const arr3 = arr2.join()
// console.log(arr2);                        // [ 1, 'sonali', 87, 's', true ]
// console.log(typeof arr2);                 // object
// console.log(arr3);                        // 1,sonali,87,s,true
// console.log(typeof arr3);                 // string


// slice and splice

//console.log("A ", arr2);
const newArr1 = arr2.slice(1,3)
//console.log(newArr1);

// console.log("B ",arr2);
const newArr2 = arr2.splice(1,3)

// console.log("C ",arr2);
// console.log(newArr2);