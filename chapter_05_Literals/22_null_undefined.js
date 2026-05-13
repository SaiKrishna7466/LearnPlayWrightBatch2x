// ========================================
// NULL vs UNDEFINED in JavaScript
// ========================================

// ========== UNDEFINED ==========
// undefined means a variable is declared but NOT assigned any value
// It's the DEFAULT value for uninitialized variables

let x; // Variable declared but not assigned
console.log(x); // Output: undefined

// Function with no return statement returns undefined
function test() {
    let result;
    return result; // Returns undefined
}
console.log(test()); // Output: undefined

// Function parameter that is not passed returns undefined
function greet(name) {
    console.log(name); // If not passed, name will be undefined
}
greet(); // Output: undefined

// ========== NULL ==========
// null means a variable is intentionally assigned NO value
// It's deliberately set by the programmer
// null represents "nothing" or "no value"

let y = null; // Intentionally assigning null
console.log(y); // Output: null

// ========== KEY DIFFERENCES ==========
console.log("\n--- DIFFERENCES ---\n");

// 1. TYPE CHECK
console.log(typeof undefined); // Output: undefined
console.log(typeof null); // Output: object (this is a quirk in JS)

// 2. EQUALITY CHECK
console.log(undefined == null); // Output: true (loose equality)
console.log(undefined === null); // Output: false (strict equality)

// 3. WHERE THEY COME FROM
let a; // a is undefined (not assigned)
let b = null; // b is null (intentionally assigned)

console.log(a); // Output: undefined
console.log(b); // Output: null

// ========== SIMPLE COMPARISON ==========
// undefined = "Variable exists but has no value yet"
// null = "I purposely put nothing here"

// EXAMPLE: Phone number field
let phoneNumber1; // undefined (user hasn't filled it yet)
let phoneNumber2 = null; // null (user explicitly said they don't have a phone)

console.log("\nPhone 1 (undefined):", phoneNumber1); // undefined
console.log("Phone 2 (null):", phoneNumber2); // null
