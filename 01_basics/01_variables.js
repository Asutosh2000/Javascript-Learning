const accountId = 144553;
let accountEmail = "kumarssu777@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";

// assign multiple variables to a single variable
let person = "John Smith",
  carName = "Volvo",
  price = 200;

let accountState;

// accountId = 765;
accountEmail = "asutosh@iterator.in";
accountPassword = "Asut@2000";
accountCity = "Bengaluru";

// with var we can re-declare variables but with let we can't
var vehicleName = "Volvo";
var vehicleName;
// let vehicleName = "Volvo";
// let vehicleName; //this will throw an error

// but redeclaring a variable using the var keyword can impose problems.
var x = 10;
// Here x is 10;
{
  var x = 2;
  // Here x is 2;
}
console.log("x", x);

// Variables declared inside a { } block cannot be accessed from outside the block:
{
  let x = 2; // this will throw an error
}

{
  var x = 2; // this will work because variables declared with the var always have global scope
}
// console.log(x);

/*
  Prefer not to use var because of issue in block scope and functional scope
*/
// console.log(person, carName, price);
// console.table([
//   accountEmail,
//   accountId,
//   accountPassword,
//   accountCity,
//   accountState,
// ]);
