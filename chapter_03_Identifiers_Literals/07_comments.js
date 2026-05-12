// ===== SINGLE LINE COMMENTS =====

// This is a single line comment
// Single line comments start with two forward slashes //

// They are used to explain a single line of code
var userName = "John"; // Comment explaining this variable

// Comments can appear before or after code
// Each line needs its own // symbols

// Rule 1: Single line comments ignore everything after //
var age = 30; // This will not execute: var invalid = "test";

// Rule 2: Single line comments are useful for quick notes
// TODO: Fix this bug
// FIXME: This logic needs review
// NOTE: Remember to update this later
// HACK: This is a temporary solution

// Rule 3: Multiple single line comments in a row
// Line 1 of explanation
// Line 2 of explanation
// Line 3 of explanation
var result = 100 + 50;

// Rule 4: Can comment out code temporarily
// var tempVariable = "temporary";
// console.log(tempVariable);

// ===== MULTI LINE COMMENTS =====

// /*
// This is a multi-line comment
// It starts with /* and ends with */
// Multiple lines can be written inside
// This is useful for longer explanations
// */

/*
Multi-line comments are useful for:
1. Explaining complex functions
2. Providing detailed documentation
3. Commenting out blocks of code
*/

/*
Function: calculateTotal()
Description: This function calculates the total price
Parameters: price (number), tax (number)
Returns: total (number)
Example: calculateTotal(100, 10) returns 110
*/
function calculateTotal(price, tax) {
    return price + tax;
}

/*
Object structure:
{
    name: string,
    age: number,
    email: string,
    isActive: boolean
}
*/
var user = {
    name: "John",
    age: 30,
    email: "john@example.com",
    isActive: true
};

/*
This is a multi-line comment
with detailed explanation
spanning multiple lines
and providing context about the code below
*/
var firstName = "Sai";
var lastName = "Krishna";
console.log(firstName + " " + lastName);

// ===== COMMENTING OUT BLOCKS OF CODE =====

/* Temporarily disabled this section
var testVar = 100;
console.log(testVar);
var anotherVar = 200;
console.log(anotherVar);
*/

// ===== BEST PRACTICES =====

// Good Comment: Clear and concise
var discount = 0.15; // 15% discount for bulk orders

// Poor Comment: Obvious and redundant
// var x = 10;  // Set x to 10

/*
Good multi-line comment:
Explains WHY the code does something, not WHAT
Provides context and important details
Helps future developers understand the logic
*/

// ===== SPECIAL COMMENTS =====

// TODO: Implement user authentication
// FIXME: Fix the validation logic
// NOTE: This will be deprecated in v2
// HACK: Quick fix, needs refactoring
// BUG: Known issue with concurrent requests
// REVIEW: Please check this implementation

