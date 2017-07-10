let mathlib = require('./mathlib')();

const num1 = 5;
const num2 = 10;


console.log(
  `${num1} + ${num2} gives ${mathlib.add(num1,num2)}.`
);

console.log(
  `${mathlib.multiply(num1,num2)} is the product of ${num1} x ${num2} is.`
);

console.log(
  `Number ${num1} squared is ${mathlib.square(num1)}.`
);

console.log(
  `Randomly generated number between ${num1} and ${num2}:
  ${mathlib.random(num1,num2)}.`
);


