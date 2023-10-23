// truthy and falsy values
// # falsy values - false, 0, BigInt on, -0, "", null,undefined,NaN
// # truthy values - "0",'false', " ",[],{},function(){}


const userEmail = "sonali@gmail.com"

if (userEmail) {
    // console.log("Got User email");
}
else{
    // console.log("email is not there");
}
const array = []
if (array.length == 0) {
    // console.log("array is empty");
}


const emptyObje = {}
if (Object.keys(emptyObje).length == 0) {
    // console.log("Object is empty");
}



// Nullish Coalescing Operator(??) - specially for null and undefined values

let value1 ;
// value1 = 5 ?? 10;
// value1 = null ?? 10
// value1 = undefined ?? 20
value1 = null ?? 5 ?? 15

// console.log(value1);

// Terniary Operator

const age = 18
age == (18) ? console.log("accepted") : console.log("not accepted");;