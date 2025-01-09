const accountId = 144553
let accountEmail = "shubh@goggle.com"
var accountPassword = "12345"
accountCity = "Noida"

// accountId = 2 not allowed beacuse it is constant 

console.log(accountId);
accountEmail="hc@hc.com"
accountPassword = "4434"
accountCity = "DELHI"

/*
prefer not to use var 
beacuse of issue in block scope and functional scope.>
*/
console.table([accountEmail,accountId,accountPassword,accountCity])