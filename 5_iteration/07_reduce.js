
const nums = [1,2,3]

const total = nums.reduce(function (accumulator, currentValue){

    // console.log(`accumulator : ${accumulator} and current value : ${currentValue}`);
    return accumulator + currentValue;

}, 0)    // assign initial value to accumulator

// console.log(total);

const array = [1,2,3,4,5]
const result = array.reduce( (acc , currValue) => (acc + currValue),0)
// console.log(result);


const shoppingCart = [
    {
        item : "iPhone 15 pro",
        price : 135000 
    },
    {
        item : "smart watch",
        price : 5000 
    },
    {
        item : "lenovo lapy",
        price : 45000 
    },

]
const bill = shoppingCart.reduce( (accumulator,itmes) => (accumulator + itmes.price),0)
console.log(`Toatal amount : ${bill}`);