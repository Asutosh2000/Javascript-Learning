// let myName = "asutosh     ";
// let myChannel = "chai     ";

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidey power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// heroPower.hitesh()
myHeros.hitesh();
myHeros.heyHitesh();
// heroPower.heyHitesh();

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "Js assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "ChaiAurCode     ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is: ${this.trim().length}`);
};

anotherUserName.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();
