
// Immediately Invoked Function Expression(IIFE)
// reason to use IIFE - 1. to prevent funct for global variables polution
// 2. to execute a function immadiately
/* 
 global scope se prblm hoti h kai bar to use global scope k variables/ 
 vha kuch declaration k polution ko htane k liye IIFE ka use kiya h
*/
// function DBconnection() {
//     console.log(`Database connected...`);
// }
// DBconnection()

//--------------- IIFE function ----------------
// syntax ->    ( function )(for execution)

(function DBconnection() {
    // named IIFE
    console.log(`Database connected...`);
})();                   // add ; explicitely to run other functions

( (msg) => {
    // unamed IIFE
    console.log(`Hello programmers, ${msg}`);
})("Good Morning !!!!!")