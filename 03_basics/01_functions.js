function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
  // let result = num1 + num2;
  // return result;
  return num1 + num2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "Hitesh") {
  if (!username) {
    console.log("Please enter a user name");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Asutosh"));
// console.log(loginUserMessage("Asutosh"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 300, 400, 500, 600));

const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
// handleObject(user);
handleObject({ username: "asu", price: 399 });

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
