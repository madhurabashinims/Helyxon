// 1. Define variables with types
let firstName: string = "Madhura";
let age: number = 22;
let isActive: boolean = true;

console.log(`Name: ${firstName}, Age: ${age}, Active: ${isActive}`);

// 2. Function with typed arguments + return type
function addNumbers(a: number, b: number): number {
  return a + b;
}
console.log("Sum from TS function:", addNumbers(10, 20));

// 3. Interface Student
interface Student {
  id: number;
  name: string;
  age: number;
}

// Example usage
let student1: Student = {
  id: 101,
  name: "Alice",
  age: 21
};

console.log("Student:", student1);
