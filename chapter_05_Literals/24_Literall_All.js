let count = 23;
let negative = -10;
let zero = 0;

let h = 0xFF;
console.log(typeof h);

// ========================================
// ALL NUMBER TYPES SUPPORTED IN JAVASCRIPT
// ========================================

// 1. INTEGER (Whole Numbers)
let integer1 = 42;
let integer2 = -15;
let integer3 = 0;
console.log("Integer:", integer1, integer2, integer3);

// 2. FLOATING POINT (Decimal Numbers)
let decimal1 = 3.14;
let decimal2 = -2.5;
let decimal3 = 0.5;
console.log("Floating Point:", decimal1, decimal2, decimal3);

// 3. HEXADECIMAL (Base 16 - starts with 0x)
let hex1 = 0xFF; // 255 in decimal
let hex2 = 0x10; // 16 in decimal
let hex3 = 0xABC; // 2748 in decimal
console.log("Hexadecimal:", hex1, hex2, hex3);

// 4. OCTAL (Base 8 - starts with 0o)
let octal1 = 0o10; // 8 in decimal
let octal2 = 0o77; // 63 in decimal
let octal3 = 0o100; // 64 in decimal
console.log("Octal:", octal1, octal2, octal3);

// 5. BINARY (Base 2 - starts with 0b)
let binary1 = 0b1010; // 10 in decimal
let binary2 = 0b1111; // 15 in decimal
let binary3 = 0b10101; // 21 in decimal
console.log("Binary:", binary1, binary2, binary3);

// 6. SCIENTIFIC NOTATION (e notation)
let scientific1 = 1e3; // 1000
let scientific2 = 2.5e2; // 250
let scientific3 = 1.5e-2; // 0.015
console.log("Scientific Notation:", scientific1, scientific2, scientific3);

// 7. SPECIAL NUMBER VALUES
let infinity = Infinity; // Positive infinity
let negInfinity = -Infinity; // Negative infinity
let notANumber = NaN; // Not-a-Number
console.log("Special Values:", infinity, negInfinity, notANumber);

// ALL are type "number" in JavaScript
console.log("\nAll types are 'number':");
console.log(typeof 42, typeof 3.14, typeof 0xFF, typeof 0b1010, typeof Infinity, typeof NaN);
