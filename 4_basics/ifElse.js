// if only runs for true condition and else for false

 if(2 == 2){
//     console.log(`condition is true`);
 }

if(2 == "2"){
    // console.log(`condition is true`);
}
if(2 === "2"){
        //  console.log(`condition is true`);
 }else
 {
    // console.log(`condtion is false`);
 }
// <, >,<=, >=, != ,==, ===(for strictly checking - data type)


const isLoggedIn = true // false
if (isLoggedIn) {
    // console.log(`user is logged in successfully`);
} else {
    // console.log(`not logged in, try again`);
}

const score = 200

// if (score > 100) {
//     power = "fly"
//     console.log(`User power : ${power}`);
// }
//  console.log(`User power : ${power}`);

// if (score > 100) {
//    var power = "fly"
//     console.log(`User power : ${power}`);
// }
//  console.log(`User power : ${power}`);

if (score > 100) {
   let power = "fly"
    // console.log(`User power : ${power}`);
}
//  console.log(`User power : ${power}`);

//----------------------- nested if else -----------------------------------

// const loginUserAge = 18
// if (loginUserAge < 15) {
//     console.log("you are a teen ager, please wait");
// }
// else if (loginUserAge < 18) {
//     console.log("sorry, you can't login. Wait for few time");
// }
// else if (loginUserAge == 60) {
//     console.log("sorry, your login time is expired");
// }
// else{
//     console.log(`you are perfectl to loggin in this app`);;
// }


const loggin = true
const debitCard = false

// if(loggin && debitCard){
//     console.log("You are able to shope");
// }
// else{
//     console.log(`please fullfill the criteria`);
// }

if (loggin || debitCard) {
    console.log("Welcome, please shope freely");
}
