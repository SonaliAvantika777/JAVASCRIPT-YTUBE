// Dates in JS

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);


// let createdDate = new Date(2023,0,22)       // JS month starts from 0 => 1 - January, 2-Feb...
// let createdDate = new Date(2023,0,22,3,21)
let createdDate = new Date("2023-01-11")
// console.log(createdDate.toLocaleString());  // 

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());     //for oct - 9(starts from 0)
// console.log(newDate.getMonth()+1);   // 10

//console.log("Today's date is" +`${newDate}` + "and the time is "+`${newDate.getTime()}`);
newDate.toLocaleString('default',{
    weekday : "long"
})

console.log(newDate.toLocaleString());