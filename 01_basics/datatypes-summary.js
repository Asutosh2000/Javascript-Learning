// Primitive Type

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId); // false

const bigNumber = 34563235654327623313n;

// Reference Type (Non primitive)

// Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "asutosh",
  age: 23,
};
const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof anotherId);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (use in Primitive), Heap (use in Non-Primitive)

let myYoutubeName = "chai aur code";

let anotherName = myYoutubeName;
anotherName = "asutosh mahapatra";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "asutosh@iterator.in";

console.log(userOne.email);
console.log(userTwo.email);
