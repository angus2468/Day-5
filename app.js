// console.log("test");

// function sayHello() {
//   console.log("Hello world!");
// }
// sayHello();
// sayHello();
// sayHello();

function argumentFunction(argument1, argument2) {
  console.log(argument1, argument2);
}

argumentFunction("Hello", "World!");

function sayHelloTo(useName) {
  console.log("Hello" + useName + "!");
}

sayHelloTo("Angus");
sayHelloTo("Joseph");
sayHelloTo("Jakub");

function greet(greeting, userName) {
  console.log(greeting + " " + userName + "!");
}

greet("Good morning", "Angus");
greet("Bonjour", "Joseph");
greet("Dzień dobry", "Jakub");

function add(number1, number2) {
  return number1 + number2;
}

let result = add(1, 5);
console.log("The result is", result);
result = add(2, 10);
console.log("The result is", result);

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function calculate(number1, number2, operator) {
  if (operator === "+") {
    return add(number1, number2);
  } else if (operator === "-") {
    return subtract(number1, number2);
  } else if (operator === "*") {
    return multiply(number1, number2);
  } else if (operator === "/") {
    return divide(number1, number2);
  }
}

result = calculate(15, 12, "/");
console.log("The result is", result);
result = calculate(15, 12, "+");
console.log("The result is", result);
result = calculate(15, 12, "-");
console.log("The result is", result);
result = calculate(15, 12, "*");
console.log("The result is", result);
