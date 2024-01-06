const user = {
  username: "John Doe",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("Asutosh", 5, true);
const userTwo = new User("Chai Aur Code", 11, false);
console.log(userOne.constructor);
// console.log(userTwo);
