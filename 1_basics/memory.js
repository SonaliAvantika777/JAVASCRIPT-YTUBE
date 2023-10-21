
// Memory of 2 types - Stack and heap
// Stack(primitives), Heap(Non-Primitives)

let myName = "sonali"
let anotherName = myName
anotherName = "Priya"
// myName = "ram"
console.log(myName);
// console.log(anotherName);

let user1 ={
    email : "user1@gmail.com",
    upi : "user1@ybl"
}
let user2 = user1
user2.email = "rachi@gmail.com"

console.log(user1.email);
console.log(user2.email);