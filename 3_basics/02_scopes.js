
var c =300
let a = 100

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  d = 40;
//   console.log("Innner a : ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


function one(){

    const username = "sonali"
    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    // two()
}
one()

//-------------- define normal function--------
console.log(addOne(1));

function addOne(num){
    return num + 1
}


//----define a function and assign to a varaible is called expression
// addTwo(5)
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(1));