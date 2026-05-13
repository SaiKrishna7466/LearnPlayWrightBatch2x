// ========================================
// DIFFERENCE: BACKTICKS vs SINGLE vs DOUBLE QUOTES
// ========================================

// SINGLE QUOTES (' ') and DOUBLE QUOTES (" ")
// - Both create regular string literals
// - No difference in functionality
// - Use for simple strings

let single = 'Hello';
let double = "Hello";
console.log(single === double); // true (same value)

// BACKTICKS (` `) - TEMPLATE LITERALS
// - Allow variable interpolation with ${}
// - Support multi-line strings
// - Can embed expressions

let name = "Alice";
let age = 25;

// Template literal with interpolation
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // "Hello, my name is Alice and I am 25 years old."

// Multi-line example
let multiLine = `This is line 1
This is line 2
This is line 3`;
console.log(multiLine);