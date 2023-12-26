const accountId = 144553;
let accountEmail = "kumarssu777@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";

let accountState;

// accountId = 765;
accountEmail = "asutosh@iterator.in";
accountPassword = "Asut@2000";
accountCity = "Bengaluru";

/*
  Prefer not to use var because of issue in block scope and functional scope
*/

console.table([
  accountEmail,
  accountId,
  accountPassword,
  accountCity,
  accountState,
]);
