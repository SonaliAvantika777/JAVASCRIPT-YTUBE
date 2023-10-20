//

// 1. Primitive - call by value(original data not given instead gives copy of data)
// 7 types - String, Number,Boolean,null,undifined,symbol,BigInt

const score = 100
const scoreValue = 10.99
const isLoggedIn = false
const  outsiedeTemperaure = null
let userEmail ;     //undifined

const id = Symbol('123456')
const anotherId = Symbol('123456')
//console.log(id == anotherId);
//console.log(typeof id);      //symbol

const bigNumber = 1234567890987654321n
//console.log(typeof bigNumber);  //bigint

// 2. Reference (non-primitive)
// Array, Objects, Functions

const countries = ["Bharat","France","USA"]
//console.log(typeof countries);    //object

let myObject = {
    name :"sonali",
    address : "Indore"
}
//console.log(typeof myObject);     //object

const myFunction =  function(){
    console.log("Hello World");
} 
//console.log(typeof myFunction);     //function