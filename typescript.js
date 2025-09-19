// 1. Define variables with types
var firstName = "Madhura";
var age = 22;
var isActive = true;
console.log("Name: ".concat(firstName, ", Age: ").concat(age, ", Active: ").concat(isActive));
// 2. Function with typed arguments + return type
function addNumbers(a, b) {
    return a + b;
}
console.log("Sum from TS function:", addNumbers(10, 20));
// Example usage
var student1 = {
    id: 101,
    name: "Alice",
    age: 21
};
console.log("Student:", student1);
