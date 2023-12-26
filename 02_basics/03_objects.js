// singleton

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Asutosh",
  "full name": "Asutosh Mahapatra",
  [mySym]: "mykey1",
  age: 23,
  location: "Jaipur",
  email: "kumarssu777@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "asutosh@iterator.in";
// Object.freeze(JsUser);
JsUser.email = "asutosh@chatgpt.in";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
