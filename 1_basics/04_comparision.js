
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

/******** avoid these comparisions ***********/

// console.log(null > 0);       // f
// console.log(null == 0);      // f
// console.log(null >= 0);      // t

/*
Reason - Equality check == and comparision > < >= <= work differently
Comparision convert null to a num, treating it as 0.
that's why null >= 0 is true and null == 0 is false
*/

// use ' === ' for strictly comparision(data types)
// console.log('a' === 'a');
// console.log(2 === 2);


