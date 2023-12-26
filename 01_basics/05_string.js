const name = "asutosh";
const repoCount = 50;

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("phiku-asutosh-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf("k"));

const newString = gameName.substring(0, 4); // not include end index
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "    hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://asutosh.com/asutosh%20mahapatra";
console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));
