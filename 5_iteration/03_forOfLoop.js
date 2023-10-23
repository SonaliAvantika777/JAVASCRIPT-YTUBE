// for of loop

let numbers = [1,2,3,4,5]
for(const num of numbers){
    // console.log(num);
}

let greetings = "Hello Wolrd !"
for(let greet of greetings){
    if(greet == " "){
        continue
    }
    console.log(`each char in ${greet}`);
}

// Map - key always unique , value can be dulicate
let map = new Map()
map.set('Bh',"Bharat")
map.set('USA',"United State of America")
map.set('UK',"United Kingdom")
// map.set('Bh',"Bharat")
// map.set('IN',"Bharat")

// console.log(map);

// for(let values of map){
//        console.log(values);
// }
for(let [key,values] of map){
    // console.log(key ,':', values );
}


const game = {
      game1 : 'chese',
      game2 : 'squase',
      geame3 : 'football'
}
for(let obj of game){
    console.log(obj);
}

// for of loop is not aplicable for objects

