const accountId=144553;
let accountEmail="Soumen@google.com";
var accountPassword="12345";
accountCity="Jaipur";
let accountState;
// accountId=2;     // Not allowed
accountEmail="ss@ss.com";
accountPassword="22123332";
accountCity="Kolkata"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

