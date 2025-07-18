/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"
*/

function calculator( /*args*/ ) {
  //your code
  if(operator === '/' && num2 === 0) return "Can't divide by 0!";
  let op = {
    '+' : (a,b) => a + b,
    '-' : (a,b) => a - b,
    '*' : (a,b) => a * b,
    '/' : (a,b) => a / b
  }
  return op[operator] ? op[operator](num1, num2) : "Unknown Operator!";
}

exports.solution = calculator;