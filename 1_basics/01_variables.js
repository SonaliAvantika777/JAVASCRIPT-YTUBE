const accountId = 12322
let accountEmail = "sonaliy@gamil.com"
var accountPassword = "1234"
accountCity = "Indore"
let accountState;

// accountId = 12343243  //not allowed to change value of a const variable

accountEmail = "sonal123@gmail.com"
accountPassword = "43232"
accountCity = "Delhi"

console.log(accountId);
/*
prefer not to use 'var'
bcoz of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


