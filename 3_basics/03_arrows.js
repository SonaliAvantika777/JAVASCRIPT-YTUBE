
// this keyword is used to access current context(values)
const user = {
    username : "Sonali",
    price : 1000,

    welcomeMsg : function(){
           console.log(`Hello ${this.username}, welcome to website`);
        //    console.log(this);
    }
}
// user.welcomeMsg()
// user.username = "rachi"
// user.welcomeMsg()
// console.log(this);                          // {}

/*
In primary days JS excecute in a engine that is embed in browser
bt now a days JS engines are standalone(nodejs,denojs etc)

global object for browser is windows
*/

// function chai(){
//     // console.log(this);
//     let name = "sonali"
//     console.log(this.name);                  // undefined
// }
// chai()

// const chai = function(){
//     let name = "kadak chai"
//     console.log(this.name);                  // undefined
// }
// chai()

const chai = () => {
    let name = "kadak chai"
    console.log(this.name);               // undefined
    console.log(this);                    // {}
}
// chai()

//------------ Arrow Function --------------------

// syntax is  () => {}
// const addTwoNum = (num1 , num2) => {
//     console.log("This is an Arrow finction")
//     return num1 + num2
// }

// const addTwoNum = (num1 , num2) =>  num1 + num2                      // 5
// const addTwoNum = (num1 , num2) =>  (num1 + num2)                    // 5

// const addTwoNum = () =>  { username : "Sonali"}                 // undefined
const addTwoNum = () => ( { username : "Sonali"})
console.log(addTwoNum());