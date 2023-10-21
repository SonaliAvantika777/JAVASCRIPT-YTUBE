// Dates in JS

let myDate = new Date();             // returns today's date and time

// console.log(myDate);                              // 2023-10-21T03:27:24.000Z
// console.log(myDate.toLocaleString());             // 10/21/2023, 8:59:18 AM
// console.log(myDate.toLocaleDateString());         // 10/21/2023
// console.log(myDate.toLocaleTimeString());         // 8:59:18 AM
// console.log(typeof myDate);                       // object

//************ define custom date ******************************/

// let createdDate = new Date(2023,0,22)         // in JS month starts from 0 => 0 - January, 1-Feb...
// let createdDate = new Date(2023,0,22,3,21)

let createdDate = new Date("2023-01-11")
//  console.log(createdDate.toLocaleString());          // 1/11/2023, 5:30:00 AM
// console.log(createdDate.getTime());                  // 1673395200000

let myTimeStamp = Date.now()      // Returns the number of milliseconds elapsed since midnight,
                                  // January 1, 1970 Universal Coordinated Time (UTC).

// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());          // 21
// console.log(newDate.getDay());           // 6
// console.log(newDate.getMonth());         //for oct - 9(starts from 0)
// console.log(newDate.getMonth()+1);       // 10


// console.log( `Today's date is ${newDate.toLocaleDateString()} and the time is ${newDate.toLocaleTimeString()}`);

newDate.toLocaleString('default',{
    weekday : "long"
})

console.log(newDate.toLocaleString());