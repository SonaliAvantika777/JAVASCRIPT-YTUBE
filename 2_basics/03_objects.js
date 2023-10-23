
// object literals

const mySym = Symbol("key1")

const user = {
    name :  "Sonali",
    "full name" : "Sonali Yaduvanshi",
    email : "user@gmail.com",
    isLoggedIn : false,
    lastLogin : ["Monday","Friday"],
    [mySym] : "mykeys"
}

//  console.log(user.name);
//  console.log(user["full name "]);
//  console.log(user["email"]);
//  console.log(typeof user[mySym]);

 user.email = "sonali@google.com"
 //Object.freeze(user);
 user.email = "rachi123@gmail.com"
 //console.log(user);

 user.greeting = function(){
    console.log("Hello JS users...");
 }
 user.greeting2 = function(){
    console.log(`Hello JS users,${this.name}`);
 }
 console.log(user.greeting());
 console.log(user.greeting2());
 
