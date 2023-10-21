// singletone - Object.create

//const appUser = new Object
const appUser = {}

//console.log(appUser);

appUser.id = 101
appUser.name = "Rachi"
appUser.email = "rachi123@gmail.com"
appUser.address = "Indore"
//console.log(appUser);
console.log(Object.keys(appUser));
console.log(Object.values(appUser));
console.log(Object.entries(appUser));
console.log(appUser.hasOwnProperty("email"));
console.log(appUser.hasOwnProperty("city"));



const newUser ={
    fullname : {
        userfullname : {
            firstName : "Sonali",
            lastName : "Yadav"
        }
    }
}
//console.log(newUser);
//console.log(newUser.fullname);
//console.log(newUser.fullname.userfullname.firstName);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj3= {5:'e',6:'f'}

//const newObj = {obj1,obj2,obj3}
// const newObj = Object.assign({},obj1,obj2,obj3)
const newObj = {...obj1,...obj2,...obj3}
//console.log(newObj);

const objArray = [
    {
        name : "sonali",
        salary : 20000
    },
    {

    },
    {

    }
]
//console.log(objArray[2]);
objArray[1].name;