const name = "sonali"
const repoCount = 40

//console.log(name + repoCount + " Something");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 
const myName = new String("Sonali-yyy")
// console.log(myName);
// console.log(myName[0]);
// console.log(myName.__proto__); 
// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.charAt(3));
// console.log(myName.indexOf('l'));

const newString = myName.substring(0,6)
//console.log(newString);

const anotherString = myName.slice(0,8)
//console.log(anotherString);

const trimName = "    yadav     "
// console.log(trimName);
// console.log(trimName.trim());
// console.log(trimName.trimEnd());
// console.log(trimName.trimStart());

const url = "http://localhost-3306/raystech"
// console.log(url.replace('-',':'));
// console.log(url.includes('http'));
// console.log(url.includes('hello'));

console.log(url.split('/'))
console.log(url.split(':'));