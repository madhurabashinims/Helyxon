// 1. Take two numbers from user input → show sum
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let sum = num1 + num2;
alert("The sum is: " + sum);

// 2. Print numbers 1–10 in console
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 3. Filter even numbers from an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);
