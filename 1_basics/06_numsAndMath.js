
const num1 = 200;
//console.log(num1);                                      // 200

const balance = new Number(100)
// console.log(balance);                                  //[Number: 100]

// console.log(balance.toString());                       // 100
// console.log(balance.toString().length);                // 3
// console.log(balance.toFixed(2));                       // 100.00
// console.log(balance.toExponential());                  // 1e+2

const num2 = 123.567;
// console.log(num2.toPrecision(4));                      // 123.6

const zeros = 100000
// console.log(zeros.toLocaleString());                   // 100,000
// console.log(zeros.toLocaleString('en-IN'));            // 1,00,000


/******************************** Math ***********************************/

// console.log(Math);                                    // Object [Math] {}
// console.log(Math.abs(33.11));                         // 33.11
// console.log(Math.abs(-4));                            // 4
// console.log(Math.round(43.99));                       // 44
console.log(Math.ceil(5.6));                          // 6
// console.log(Math.floor(9.8));                         // 9
// console.log(Math.min(2,7,4,99));                      // 2
// console.log(Math.max(3,5,22,77,33,2,0));              // 77

// console.log(Math.sqrt(16));                           // 4 

//  console.log(Math.random());             // Returns a pseudorandom number between 0 and 1.
//  console.log(Math.random()*10 + 1 );
//  console.log(Math.floor(Math.random()*10)+1);         // 4/ 7/ 8/ 10......

 const min = 10;
 const max = 30;
 console.log(Math.floor(Math.random()*(max - min +1) + min));



