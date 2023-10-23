// syntax to define a function in JS
/*
by using function keyword,for ex :-
   function funtionname(parameters(optional)){
       body
   }

    funtionname     // this is reference of a function
    funtionname(aurgument(optional))   // execute a function by using ()
*/

function myFunct(){
    console.log("sonali");
}
// myFunct()

function addNumbers(num1,num2){
   
    console.log(num1 + num2);
}
// addNumbers(2,4)                             // 6
// addNumbers(2,"4")                           // 24
// addNumbers(2,null)                          // 2
// const result = addNumbers(9,3)                 //12
// console.log("Result is :" , result);        // undefined


function add(num1 , num2){

    // let result = num1 + num2;
    // return result
    return  num1 + num2 ;
}
const result = add(3,4)
// console.log("Result is : ",result);

function userLogin(username = "user"){

   // if(username === undefined){
    // if(undefined){
    //     // here undefined consider as false, this block execute only gor true cond.
    if(! username){
         console.log("Please enter a username");
        return
    }
    return `${username} logged in successfully!!!!`
}

//  console.log(userLogin("Sonali"))
// console.log(userLogin())

function proposalAccept(answer){

    if(answer == "yes"){
        console.log("Hurayyyy!!!!!She said yesss");
    }
    else{
        console.log("My bed ...She is not interested in me");
    }
}
// proposalAccept()

//---- use rest operator(...) to pass multi values in a function
function calulateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calulateCartPrice(100,200,300,500,1000));


const user = {
    username : "sonali",
    password : "12345ew"
}
 
function handleUserObject(obj){
    // console.log (`username is ${obj.username} and password is ${obj.password}`)
}
// handleUserObject(user)
// or pass object directly in function
handleUserObject({
    username : "sonali",
    password : "1223abc"
})

const array = [100,200,300,400]
function getSecondValue(getArray){
    return getArray[1]
}
// console.log(getSecondValue(array));
// or pass directly array in function------
console.log(getSecondValue([100,200,300]));