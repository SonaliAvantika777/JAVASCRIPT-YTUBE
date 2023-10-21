
const marvel_heros = ["C.America","Thod","IronMan"]
const dc_heros = ["Shaktiman","BatMan","SuperMan"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

//# concat - add only 2 arrrays
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

//# use spread operator(...) to add multipule arrays
const new_heros = [...marvel_heros,...dc_heros]
//console.log(new_heros);

const array = [1,2,3,4,["sonali","rachi"],5,[6,7,['s','r']],8]
// console.log(array.flat(2));  //instead of 2, also use infinity

// console.log(Array.isArray("sonali"));               // false
// console.log(Array.from("sonali"));                  // [ 's', 'o', 'n', 'a', 'l', 'i' ]
// console.log(Array.of("yadav"));                     // [ 'yadav' ]
// console.log(Array.from({name : "sonali"}));         // [] => return an empty array(interviews)

let a =100
let b = 200
let c = 300
console.log(Array.of(a,b,c));                          // [ 100, 200, 300 ]