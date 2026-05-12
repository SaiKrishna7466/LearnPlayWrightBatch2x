var $=10;
var _a =12;
var k=15;

var key123 = 123;

// var 123 =123;

var Name = "Sai";
var name = "Krishna";

console.log(Name); //Sai
console.log(name); //Krishna

//var can we have space = "Hi";
var have_space = "we can use _";
var have$space = "we can use $";

console.log(have_space);
console.log(have$space);

// ===== IDENTIFIER RULES - EXAMPLES =====

// Rule 1: Must begin with a letter (a–z, A–Z), underscore (_), or dollar sign ($)
var firstName = "John";       // Valid - starts with letter
var _privateVar = "private";  // Valid - starts with underscore
var $price = 100;             // Valid - starts with dollar sign
// var 123name = "test";       // Invalid - starts with digit

// Rule 2: Subsequent characters may also include digits (0–9)
var var1 = "first";           // Valid - contains digit
var myVar123abc = "mixed";    // Valid - letters and digits
var _123 = 456;               // Valid - underscore then digits
var $test99 = "value";        // Valid - dollar sign then letters and digits

// Rule 3: Cannot start with a digit
// var 1stPlace = "First";    // Invalid - starts with digit
// var 9lives = "cats";       // Invalid - starts with digit

// Rule 4: Cannot be a reserved keyword
// var var = 10;              // Invalid - 'var' is reserved
// var if = true;             // Invalid - 'if' is reserved
// var function = () => {};   // Invalid - 'function' is reserved
var myVar = 10;               // Valid - not a reserved keyword

// Rule 5: Are case-sensitive
var myName = "Alice";         // Valid identifier
var myname = "bob";           // Different identifier (case-sensitive)
var MYNAME = "Charlie";       // Different identifier (case-sensitive)
console.log(myName, myname, MYNAME); // Alice bob Charlie

// Rule 6: May contain Unicode letters and Unicode escape sequences
var café = "Coffee";          // Valid - Unicode character
var naïve = "simple";         // Valid - Unicode character

// Rule 7: Cannot contain spaces, hyphens, or special characters (except _ and $)
var validName = "valid";      // Valid - uses underscore
var valid$Name = "valid";     // Valid - uses dollar sign
// var valid-name = "invalid"; // Invalid - contains hyphen
// var valid name = "invalid"; // Invalid - contains space
// var valid@name = "invalid"; // Invalid - contains special character

// Combined Examples
var user_1 = "John";          // Valid - underscore and digit
var $userName = "Alice";      // Valid - dollar sign, letters, underscore
var _$var_123 = "test";       // Valid - all allowed special characters combined


